import { execSync } from 'child_process'
import fs from 'fs'
import { macAddressToVendor } from '@features/parseClient'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const output = execSync(`dhcpd-pools -c ${process.env.NEXT_PUBLIC_DHCP_CONF_FILE_PATH} -l ${process.env.NEXT_PUBLIC_DHCP_LEASE_FILE_PATH} -f j -A`)
    const response = JSON.parse(output.toString())

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
    console.log(macAddressList.length)
    console.log(macAddressList)
    response['vendor'] = vendorCount

    res.status(200)
        .json(response)
}
