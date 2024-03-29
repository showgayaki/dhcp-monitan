import { execSync } from 'child_process'
import fs from 'fs'
import { macAddressToVendor } from '@features/MacAddress'
import { subnetmask2cidr } from '@features/IpAddress'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const output = execSync(`dhcpd-pools -c ${process.env.NEXT_PUBLIC_DHCP_CONF_FILE_PATH} -l ${process.env.NEXT_PUBLIC_DHCP_LEASE_FILE_PATH} -f j -A`)
    const response = JSON.parse(output.toString())

    // ハイフンを含んでいてアレなので、キー名変更しておく
    response.sharedNetworks = response['shared-networks']
    delete response['shared-networks']

    /* --------------
      Vendorのカウント
    -------------- */
    const vendorCount: {[key: string]: number} = {}
    const leases = fs.readFileSync(`${process.env.NEXT_PUBLIC_DHCP_LEASE_FILE_PATH}`, 'utf-8')
    const clientLines = leases.split('\n')
    const clientLinesLength = clientLines.length
    const macAddressList: string[] = []

    const datetime = (str: string) => str.split(' ').slice(-2).join('T').replace(/\//g, '-') + 'Z'
    const now = new Date()

    let isActive = false
    for(let i = 0; i < clientLinesLength; i += 1){
        if(/ends/.test(clientLines[i])){
            // dhcpd.leasesファイルには、リース終了したものも残っているようなので
            // リース終了時間が未来かどうかでアクティブか判定する
            const end = new Date(datetime(clientLines[i].trim().replace(';', '')))
            if(now.getTime() < end.getTime()){
                isActive = true
            }else{
                isActive = false
                continue
            }
        }

        if(/hardware ethernet/.test(clientLines[i])){
            const macAddress = clientLines[i].trim().replace(';', '').split(' ').slice(-1)[0]

            if(!macAddressList.includes(macAddress) && isActive){
                macAddressList.push(macAddress)
                const vendor = macAddressToVendor(macAddress)
                // ベンダーカウント
                if(vendor in vendorCount){
                    vendorCount[vendor] += 1
                }else{
                    vendorCount[vendor] = 1
                }
            }
        }
    }

    // vendorを多い順にソート
    const keys = Object.keys(vendorCount)
    const sortedVendorCount: {[key: string]: number} = {}
    keys.sort((a, b) => {
        return vendorCount[b] - vendorCount[a]
    })
    for(const key of keys){
        sortedVendorCount[key] = vendorCount[key]
    }

    response['vendor'] = sortedVendorCount

    /* --------------
      CIDR取得
    -------------- */
    const conf = fs.readFileSync(`${process.env.NEXT_PUBLIC_DHCP_CONF_FILE_PATH}`, 'utf-8')
    const lines = conf.split('\n')
    const linesLength = lines.length
    const sunetLength = response.subnets.length

    // 「subnet 192.168.1.0 netmask 255.255.255.0{」から「255.255.255.0」を取り出してCIDRにする
    for(let i = 0; i < sunetLength; i += 1){
        for(let j = 0; j < linesLength; j += 1){
            const reg = new RegExp(`subnet ${response.subnets[i].location} netmask`)
            if(reg.test(lines[j])){
                const netmask = lines[j].split(' ').splice(-1)[0].replace('{', '')
                response.subnets[i].cidr = subnetmask2cidr(netmask)
                break
            }
        }
    }

    res.status(200)
        .json(response)
}
