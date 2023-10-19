import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const config = fs.readFileSync(`${process.env.NEXT_PUBLIC_DHCP_CONF_FILE_PATH}`, 'utf-8')
    const response = {
        config: config
    }

    res.status(200)
        .json(response)
}
