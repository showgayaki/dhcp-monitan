import { execSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const startRow = (Number(req.query.startRow) === 0)?
                      Number(execSync(`wc -l ${process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH} | awk '{print $1}'`))
                      : Number(req.query.startRow)
    const log = execSync(`tail -n +${startRow + 1} ${process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH}`)
    res.status(200)
        .json(
            {
                startRow: Number(startRow),
                log: log.toString(),
            }
        )
}
