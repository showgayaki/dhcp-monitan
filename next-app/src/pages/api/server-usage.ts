import { execSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'


const cpuUsage = (output: string) => {
    /* output
    procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
     r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
     3  0 421336 426956 164104 2564304    0    0     2     8 1432 2584  1  2 96  0  0
    */
    const yMax = 100
    // 3行目のindex: 14がCPUのアイドル値
    const cpuIdleValue = output.toString().split('\n')[2].trim().split(/\s+/)[14]

    // const used = Number((Math.random() * 100).toFixed(1))
    // console.log(used)
    // return { unit: '%', yMax: yMax, usage: used }

    return { unit: '%', yMax: yMax, usage: yMax - Number(cpuIdleValue) }
}

const memoryUsage = (output: string) => {
    /* output
                total        used        free      shared  buff/cache   available
    Mem:            4933        2252         418         136        2665        2681
    Swap:           1023         411         612
    */
    const memoryUsageArray = output.toString().split('\n')[1].split(/\s+/)
    const total = Number(memoryUsageArray[1])
    const used = Number(memoryUsageArray[2])
    return { unit: 'MB', yMax: total, usage: used }
}

const diskUsage = (output: string) => {
    /* output
    Filesystem                  Size  Used Avail Use% Mounted on
    overlay                      27G  8.1G   19G  31% /
    tmpfs                        64M     0   64M   0% /dev
    ...
    */
    const diskUsageArray = output.toString().split('\n')[1].split(/\s+/)
    // 数字部分だけ取り出す
    const total = Number(diskUsageArray[1].replace(/[^0-9]/g, ''))
    const used = Number(diskUsageArray[2].replace(/[^0-9]/g, ''))
    return { unit: 'GB', yMax: total, usage: used }
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const vmstatOutput = execSync('vmstat').toString()
    const freeOutput = execSync('free -m').toString()
    const dfOutput = execSync('df -h').toString()

    const response = {
        cpu: cpuUsage(vmstatOutput),
        memory: memoryUsage(freeOutput),
        disk: diskUsage(dfOutput),
    }

    res.status(200)
        .json(response)
}
