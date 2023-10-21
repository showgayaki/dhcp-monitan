import type { NextPage } from 'next'
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { AdminLayout } from '@layout'
import { DhcpdLog } from '@models/dhcpd-log'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { TerminalTextarea } from '@components/TerminalTextarea'


const DhcpdLog: NextPage = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}dhcpd-log` || ''
    const [startRow, setStartRow] = useState(0)

    const [fallbackResource, setFallbackResource] = useState({
        startRow: startRow,
        log: '',
    })
    const { data: { data: resource } } = useSWRAxios({
        url: apiUrl,
        params: {
            startRow: startRow,
        },
        transformResponse: transformResponseWrapper((d: DhcpdLog) => {
            console.log(d)
            return d
        }),
    }, {
        data: fallbackResource,
    })

    useEffect(() => {
        setStartRow(resource.startRow)
        setFallbackResource(resource)
    }, [resource])

    return (
        <AdminLayout>
            <Card>
                <Card.Header>
                    DHCP Logs
                </Card.Header>
                <Card.Body>
                    {/* <div className='d-flex mb-2'>
                        <Button className='me-2' variant="primary">start</Button>
                        <Button variant="danger">stop</Button>
                    </div> */}
                    <TerminalTextarea text={resource.log} rows={resource.log.split('\n').length} />
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}

export default DhcpdLog
