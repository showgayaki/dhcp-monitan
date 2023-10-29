export function ip2bin(ip: string){
    return ip.split('.').map(e => Number(e).toString(2).padStart(8, '0')).join('')
}


export function ip2long(ip: string){
    return parseInt(ip2bin(ip), 2)
}


export function subnetmask2cidr(ip: string){
    return ip2bin(ip).split('1').length - 1
}


export function verifyInRange(remoteIp: number, acceptIp: number, cidr: number){
    const remoteIpNetwork = remoteIp >>> (32 - cidr)
    const acceptIpNetwork = acceptIp >>> (32 - cidr)
    return remoteIpNetwork === acceptIpNetwork
}
