import type { NextPage } from 'next'
import { Card } from 'react-bootstrap'
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@layout'
import { Networks } from '@models/networks'
import { SharedNetworkTable, SubnetTable } from '@components/NetworkTable'
import { VendorTable } from '@components/VendorTable'
import { VendorChart } from '@components/VendorChart'
import { transformResponseWrapper, useSWRAxios } from '@hooks'


Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Legend, Tooltip, Filler)

const Home: NextPage = () => {
    const networksUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}networks` || ''

    const [fallbackResource, setFallbackResource] = useState<Networks>(
        {
            subnets: [],
            sharedNetworks: [],
            summary: [],
            vendor: {},
        }
    )
    const { data: { data: resource } } = useSWRAxios<Networks>({
        url: networksUrl,
        transformResponse: transformResponseWrapper((d: Networks) => {
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
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Shared Networks
                        </Card.Header>
                        <Card.Body>
                            <SharedNetworkTable sharedNetworks={resource.sharedNetworks} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Subnets
                        </Card.Header>
                        <Card.Body>
                            <SubnetTable subnet={resource.subnets} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Vendor List Count
                        </Card.Header>
                        <Card.Body>
                            <VendorTable vendor={resource.vendor} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Vendor Chart
                        </Card.Header>
                        <Card.Body>
                            <VendorChart vendor={resource.vendor} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Home
