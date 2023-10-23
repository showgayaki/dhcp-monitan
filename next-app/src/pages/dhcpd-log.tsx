import type { NextPage } from 'next'
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect, MouseEvent } from 'react'
import { AdminLayout } from '@layout'
import { DhcpdLog } from '@models/dhcpd-log'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { TerminalTextarea } from '@components/TerminalTextarea'


const DhcpdLog: NextPage = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}dhcpd-log` || ''
    const [log, setLog] = useState('')
    const [fallbackResource, setFallbackResource] = useState({
        startRow: 0,
        log: '',
    })

    // ボタンの切り替え
    const [disabled, setDisabled] = useState(false)
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setLog('')
        if (event.currentTarget.innerHTML === 'Start') {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }

    const { data: { data: resource } } = useSWRAxios({
        url: disabled? apiUrl: undefined,
        params: {
            startRow: fallbackResource.startRow,
        },
        transformResponse: transformResponseWrapper((d: DhcpdLog) => {
            console.log(d)
            return d
        }),
    }, {
        data: fallbackResource,
    })

    useEffect(() => {
        setLog(log + resource.log)
        setFallbackResource(resource)
    }, [resource.startRow])

    return (
        <AdminLayout>
            <Card>
                <Card.Header>
                    DHCP Logs
                </Card.Header>
                <Card.Body>
                    <div className='d-flex mb-2'>
                        <Button disabled={disabled} className='py-1 px-3 me-2' variant="primary" onClick={handleClick}>Start</Button>
                        <Button disabled={!disabled} className='py-1 px-3' variant="danger" onClick={handleClick}>Stop</Button>
                    </div>
                    <TerminalTextarea text={log} />
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}

export default DhcpdLog
