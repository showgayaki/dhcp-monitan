import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'


type Client = {
    network_address: string;
    netmask: string;
    static: StaticClient[];
    dynamic: DynamicClient[];
}

type DynamicClient = {
    hostname: string;
    ip_address: string;
    mac_address: string;
    vendor: string;
    start: string;
    end: string;
}

type StaticClient = {
    hostname: string;
    ip_address: string;
    mac_address: string;
    vendor: string;
    start: string;
}


function lineSplittedSpaceEnd(line: string){
    return line.split(' ').slice(-1)[0]
}

function macAddressToVendor(macAddress: string){
    const oui = macAddress.split(':').slice(0, 3).join('').toUpperCase()
    const jsonPath = path.join(process.cwd(), 'public/assets/oui.json')

    const jsonData = fs.readFileSync(jsonPath, 'utf-8')
    const ouiJson = JSON.parse(jsonData)
    return (ouiJson[oui] === undefined)? '': ouiJson[oui]
}


function staticLeaseStartTime(ipAddress: string, macAddress: string){
    // dhcpd.logからリース時間を読み取る
    // ログ文字列例)
    // - RSYSLOG_TraditionalFileFormatの場合
    // Jan  1 **:**:** localhost dhcpd[1140]: DHCPACK on 192.168.***.*** to ma:ca:dd:re:ss:** via eth0
    // - RSYSLOG_FileFormatの場合
    // 20**-**-**T**:**:**.******+09:00 localhost dhcpd[1140]: DHCPACK on 192.168.***.*** to ma:ca:dd:re:ss:** (hostname) via eth0

    // ipAddressとmacAddressを含んでいる一番最後の行を取得
    const output = execSync(`grep ${ipAddress} ${process.env.NEXT_PUBLIC_API_LOG_FILE_PATH} | grep ${macAddress} | tail -n 1`).toString()

    // 半角スペースでsplitして、dhcpdを含む要素のインデックスを取得
    const outputSplitted = output.split(' ')
    const dhcpdIndex = outputSplitted.findIndex(elem => elem.includes('dhcpd'))

    // 「localhost」以降の要素を削除して、半角スペースで区切って文字列にする
    outputSplitted.splice(dhcpdIndex - 1)
    const leaseDateObject = new Date(outputSplitted.join(' '))

    // RSYSLOG_TraditionalFileFormatの場合は、年が取れない(2001年になる)ので「月日 時間」にしておく
    const leaseDate = (locale: string) => (leaseDateObject.getFullYear() === 2001)? leaseDateObject.toLocaleString(locale).replace('2001/', ''): leaseDateObject.toLocaleString(locale)

    return (Number.isNaN(leaseDateObject.getTime()))? '': leaseDate(process.env.NEXT_PUBLIC_API_LOCALE ?? '')
}


function dynamicClientList(network_address: string, netmask: string){
    const ip2bin = (ip: string) => ip.split('.').map(e => Number(e).toString(2).padStart(8, '0')).join('')
    const ip2long = (ip: string) => parseInt(ip2bin(ip), 2)
    const subnetmask2cidr = (ip: string) => ip2bin(ip).split('1').length - 1
    const verifyInRange = (remoteIp: number, acceptIp: number, cidr: number) => {
        const remoteIpNetwork = remoteIp >>> (32 - cidr)
        const acceptIpNetwork = acceptIp >>> (32 - cidr)
        return remoteIpNetwork === acceptIpNetwork
    }
    const datetime = (str: string) => str.split(' ').slice(-2).join(' ')

    const leases = fs.readFileSync(`${process.env.NEXT_PUBLIC_API_LEASE_FILE_PATH}`, 'utf-8')
    const clientList = leases.split('\nlease ')
    const leaseCount = clientList.length
    const dynamicClient: DynamicClient[] = []

    for(let i = 1; i < leaseCount; i += 1){
        const clientLines = clientList[i].split('\n')
        const linesLength = clientLines.length
        const client: DynamicClient = {
            hostname: '',
            ip_address: '',
            mac_address: '',
            vendor: '',
            start: '',
            end: '',
        }
        let inRange = false

        for(let j = 0; j < linesLength; j += 1){
            const line = clientLines[j].trim().replace(';', '')
            if(j === 0){
                const ipAddress = line.replace('{', '').trim()
                inRange = verifyInRange(ip2long(network_address), ip2long(ipAddress), subnetmask2cidr(netmask))
                console.log(ipAddress, inRange)
                if(!inRange){
                    break
                }
                client.ip_address = ipAddress
            }else if(inRange){
                if(/starts/.test(line)){
                    client.start = datetime(line)
                    continue
                }
                if(/ends/.test(line)){
                    client.end = datetime(line)
                    continue
                }
                if(/hardware ethernet/.test(line)){
                    client.mac_address = lineSplittedSpaceEnd(line)
                    client.vendor = macAddressToVendor(client.mac_address)
                    continue
                }
                if(/client-hostname/.test(line)){
                    client.hostname = lineSplittedSpaceEnd(line).replace(/"/g, '')
                    continue
                }
            }
        }

        if(inRange){
            dynamicClient.push(client)
        }
    }
    return dynamicClient
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const response: Client[] = []
    const staticList: StaticClient[] = []
    const dhcpConf = fs.readFileSync(`${process.env.NEXT_PUBLIC_API_CONF_FILE_PATH}`, 'utf-8')

    const subnets = dhcpConf.split('subnet ').slice(1)
    const subnetsLength = subnets.length
    for(let i = 0; i < subnetsLength; i += 1){
        const lines = subnets[i].split('\n')
        const linesLength = lines.length
        const client: Client = {
            network_address: '',
            netmask: '',
            static: [],
            dynamic: [],
        }
        const staticClient: StaticClient = {
            hostname: '',
            ip_address: '',
            mac_address: '',
            vendor: '',
            start: '',
        }

        for(let j = 0; j < linesLength; j += 1){
            const line = lines[j].trim().replace(';', '')

            if(/netmask/.test(line)){
                const networkAddress = line.split(' ')[0]
                client.network_address = networkAddress
                client.netmask = lineSplittedSpaceEnd(line).replace('{', '')
                client.dynamic = dynamicClientList(client.network_address, client.netmask)
                continue
            }

            if(/host/.test(line)){
                staticClient.hostname = lineSplittedSpaceEnd(line).replace('{', '')
                continue
            }

            if(/hardware ethernet/.test(line)){
                staticClient.mac_address = lineSplittedSpaceEnd(line)
                staticClient.vendor = macAddressToVendor(staticClient.mac_address)
                continue
            }

            if(/fixed-address/.test(line)){
                staticClient.ip_address = lineSplittedSpaceEnd(line)
                continue
            }

            if(staticClient.hostname !== ''){
                staticClient.start = staticLeaseStartTime(staticClient.ip_address, staticClient.mac_address)
                staticList.push({...staticClient})
                staticClient.hostname = ''
            }
        }

        // slice()で値渡しして、splice(0)で要素を全削除
        client.static = staticList.slice()
        staticList.splice(0)
        response.push(client)
    }
    res.status(200)
        .json(response)
}
