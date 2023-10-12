import fs from 'fs'
import path from 'path'


export function macAddressToVendor(macAddress: string){
    const oui = macAddress.split(':').slice(0, 3).join('').toUpperCase()
    const jsonPath = path.join(process.cwd(), 'public/assets/oui.json')

    const jsonData = fs.readFileSync(jsonPath, 'utf-8')
    const ouiJson = JSON.parse(jsonData)
    return (ouiJson[oui] === undefined)? 'N/A': ouiJson[oui]
}
