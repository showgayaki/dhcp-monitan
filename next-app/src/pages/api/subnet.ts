import { execSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const output = execSync(`dhcpd-pools -c ${process.env.NEXT_PUBLIC_API_CONF_FILE_PATH} -l ${process.env.NEXT_PUBLIC_API_LEASE_FILE_PATH} -f j -A`)
    const response = JSON.parse(output.toString())

    res.status(200)
        .json(response)
}
