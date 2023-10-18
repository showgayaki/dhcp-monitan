import type { NextApiRequest, NextApiResponse } from 'next'
import { serializeCookie } from '@lib'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const username = req.body.username
    const password = req.body.password

    if(username == process.env.NEXT_PUBLIC_USERNAME &&
        password == process.env.NEXT_PUBLIC_PASSWORD){
            const cookie = serializeCookie('auth', { user: username }, { path: '/' })
            res.status(200)
                .setHeader('Set-Cookie', cookie)
                .json({ login: true })
    }else{
        res.status(200).json({ login: false })
    }
}
