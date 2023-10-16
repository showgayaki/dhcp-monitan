import type { NextPage } from 'next'
import { Card, Tab, Tabs } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@layout'
import { ClientList } from '@models/client'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { ClientTable } from '@components/ClientTable'


const Leases: NextPage = () => {
    const networksUrl = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}clients` || ''

    const [fallbackResource, setFallbackResource] = useState<ClientList[]>(
        [{
            network_address: '',
            netmask: '',
            static: [],
            dynamic: [],
        }]
    )
    const { data: { data: resource } } = useSWRAxios<ClientList[]>({
        url: networksUrl,
        transformResponse: transformResponseWrapper((d: ClientList[]) => {
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

    return (
        <AdminLayout>
            <Tabs>
                {resource.map((network, index) => {
                    return (
                        <Tab key={ index } eventKey={ network.network_address } title={ network.network_address } className='py-3 px-2'>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <Card>
                                        <Card.Header>
                                            Static Leases
                                        </Card.Header>
                                        <Card.Body>
                                            <ClientTable type='static' clientList={ network.static } />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <Card>
                                        <Card.Header>
                                            Dynamic Leases
                                        </Card.Header>
                                        <Card.Body>
                                            <ClientTable type='dynamic' clientList={ network.dynamic } />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </Tab>
                    )
                })}
            </Tabs>
        </AdminLayout>
    )
}

export default Leases