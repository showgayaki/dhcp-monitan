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
import 'chartjs-adapter-date-fns'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@layout'
import { Networks } from '@models/networks'
import { RealtimeLineChart } from '@components/RealtimeLineChart'
import { SharedNetworkTable, SubnetTable } from '@components/NetworkTable'
import { VendorTable } from '@components/VendorTable'
import { VendorChart } from '@components/VendorChart'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import StreamingPlugin from 'chartjs-plugin-streaming'


Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Legend,
    Tooltip,
    Filler,
    StreamingPlugin
)

const Home: NextPage = () => {
    const networksUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}networks` || ''

    const [fallbackResource, setFallbackResource] = useState<Networks>(
        {
            subnets: [],
            sharedNetworks: [],
            summary: {
                location: '',
                defined: 0,
                used: 0,
                touched: 0,
                free: 0,
            },
            vendor: {},
        }
    )
    const { data: { data: resource }, isLoading } = useSWRAxios<Networks>({
        url: networksUrl,
        transformResponse: transformResponseWrapper((d: Networks) => {
            console.log('transformResponse:', d)
            return d
        }),
    }, {
        data: fallbackResource,
    })

    useEffect(() => {
        setFallbackResource(resource)
    }, [resource])

    if(isLoading){
        return (
            <AdminLayout>
            </AdminLayout>
        )
    }
    else{
        return (
            <AdminLayout>
                <div className='row'>
                    <div className="col-12 mb-3">
                        <Card>
                            <Card.Body>
                                <h4 className='mb-4'>Realtime Client Count</h4>
                                <div className='realtime-client-count'>
                                    <RealtimeLineChart subnetList={resource.subnets} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Card className='h-100'>
                            <Card.Header>
                                Shared Networks
                            </Card.Header>
                            <Card.Body>
                                <SharedNetworkTable sharedNetworks={resource.sharedNetworks} />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className='h-100'>
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
                        <Card className='h-100'>
                            <Card.Header>
                                Vendor List Count
                            </Card.Header>
                            <Card.Body>
                                <VendorTable vendor={resource.vendor} />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className='h-100'>
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
}

export default Home
