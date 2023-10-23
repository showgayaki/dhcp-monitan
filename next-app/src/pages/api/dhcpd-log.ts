import { execSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let startRow = (Number(req.query.startRow) === 0)?
                      Number(execSync(`wc -l ${process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH} | awk '{print $1}'`)) + 1
                      : Number(req.query.startRow)

    const log = execSync(`tail -n +${startRow} ${process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH}`)
    if(log.toString() !== ''){
        startRow = Number(execSync(`wc -l ${process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH} | awk '{print $1}'`)) + 1
    }

    res.status(200)
        .json(
            {
                startRow: startRow,
                log: log.toString(),
            }
        )
}
