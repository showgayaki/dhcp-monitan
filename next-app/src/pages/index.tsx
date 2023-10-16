import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowDown,
    faArrowUp,
    faDownload,
    faEllipsisVertical,
    faMars,
    faSearch,
    faUsers,
    faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
    Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
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
import {
    faCcAmex,
    faCcApplePay,
    faCcPaypal,
    faCcStripe,
    faCcVisa,
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@layout'
import { Networks } from '@models/networks'
import { SharedNetworkTable, SubnetTable } from '@components/NetworkTable'
import { VendorTable } from '@components/VendorTable'
import { VendorChart } from '@components/VendorChart'
import { newResource, Resource } from '@models/resource'
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
