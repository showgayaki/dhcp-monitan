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
import { SharedNetworkTable } from '@components/SharedNetwork'
import { SubnetTable } from '@components/Subnet'
import { newResource, Resource } from '@models/resource'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import SubnetStat from '@components/Subnet/SubnetTable'


Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Legend, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const doughnutData = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
}


const Home: NextPage = () => {
    const networksUrl = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}networks` || ''

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
            // ハイフンを含んでいてアレなので、キー名変更しておく
            d.sharedNetworks = d['shared-networks']
            delete d['shared-networks']
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
                            <SharedNetworkTable
                                sharedNetworks={resource.sharedNetworks}
                            />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Subnets
                        </Card.Header>
                        <Card.Body>
                            <SubnetTable
                                subnet={resource.subnets}
                            />
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
                            <div className="table-responsive">
                                <table className="table border mb-0">
                                    <thead className="table-light fw-semibold">
                                        <tr className="align-middle">
                                            <th>Vendor</th>
                                            <th>Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td>
                                                N/A
                                            </td>
                                            <td>
                                                5
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>
                                                Espressif Inc.
                                            </td>
                                            <td>
                                                2
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>
                                                Apple, Inc.
                                            </td>
                                            <td>
                                                2
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>
                                                Google, Inc.
                                            </td>
                                            <td>
                                                1
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>
                                                Seiko Epson Corporation
                                            </td>
                                            <td>
                                                1
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>
                                                Amazon Technologies Inc.
                                            </td>
                                            <td>
                                                2
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-3">
                    <Card>
                        <Card.Header>
                            Vendor Chart
                        </Card.Header>
                        <Card.Body>
                            <Doughnut data={doughnutData} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Home
