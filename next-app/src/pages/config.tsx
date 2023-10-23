import type { NextPage } from 'next'
import { Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { AdminLayout } from '@layout'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { TerminalTextarea } from '@components/TerminalTextarea'


const Config: NextPage = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}config` || ''

    const [fallbackResource, setFallbackResource] = useState({config: ''})
    const { data: { data: resource } } = useSWRAxios({
        url: apiUrl,
        transformResponse: transformResponseWrapper((d: string) => {
            console.log(d)
            return d
        }),
    }, {
        data: fallbackResource,
        headers: {
            'x-total-count': '0',
        },
    })

    useEffect(() => {
        setFallbackResource(resource)
    }, [resource])

    const rows = resource.config.split('\n').length

    return (
        <AdminLayout>
            <Card>
                <Card.Header>
                    DHCP Config
                </Card.Header>
                <Card.Body>
                    <TerminalTextarea text={resource.config} />
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}

export default Config
