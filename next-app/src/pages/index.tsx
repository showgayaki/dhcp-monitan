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
import React, { useEffect, useState, useRef, useMemo } from 'react'
import { AdminLayout } from '@layout'
import { ServerUsage } from '@models/server-usage'
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
    /*
     Server Usage
     */
    const serverUsageList = [
        'CPU',
        'Memory',
        'Disk',
    ]
    const serverUsageChartRefList = useRef<Chart<'line'>[]>([])

    const serverUsageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}server-usage` || ''
    const [usage, setUsage] = useState({})
    const { data: { data: serverUsage }, isLoading: isServerUsageLoading } = useSWRAxios<ServerUsage>({
        url: serverUsageUrl,
        transformResponse: transformResponseWrapper((d: ServerUsage) => {
            console.log('ServerUsage:', d)
            return d
        }),
    }, {
        data: usage,
    })

    useEffect(() => {
        setUsage(serverUsage)
    }, [serverUsage])

    const convertedList = useMemo(
        // https://zenn.dev/tm35/articles/0a92a23b7a6afa
        () =>
        serverUsageList.map((value, index) => ({
                id: index,
                name: value,
                refCallbackFunction: (node: Chart<'line'> | null) => {
                    if (node !== null && serverUsageChartRefList.current[index] === undefined) {
                        // node が null でなく、かつ、ref が未登録の場合
                        serverUsageChartRefList.current[index] = node;
                    } else {
                        // node が null の場合は、対象の node を管理する必要がなくなるため削除
                        delete serverUsageChartRefList.current[index];
                    }
                },
            })),
        [serverUsage]
    )

    /*
     Networks
     */
    const clientCountChartRef = useRef<Chart<'line'>>(null!)
    const networksUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}networks` || ''
    const [networks, setNetworks] = useState<Networks>(
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
    const { data: { data: networkStats }, isLoading: isNetworkLoading } = useSWRAxios<Networks>({
        url: networksUrl,
        transformResponse: transformResponseWrapper((d: Networks) => {
            console.log('Networks:', d)
            return d
        }),
    }, {
        data: networks,
    })

    useEffect(() => {
        setNetworks(networkStats)
    }, [networkStats])

    /*
     Rendering
     */
    if (isServerUsageLoading || isNetworkLoading) {
        return (
            <AdminLayout>
            </AdminLayout>
        )
    }
    else {
        if (clientCountChartRef.current !== null && clientCountChartRef.current !== undefined) {
            clientCountChartRef.current.data.datasets.map((dataset, index) => {
                dataset.data.push({
                    x: Date.now(),
                    y: networkStats.subnets[index].used,
                })
                clientCountChartRef.current.update('quiet')
            })
        }

        return (
            <AdminLayout>
                <div className='row server-usage'>
                    {convertedList.map((item, index) => {
                        const itemLowerCase = item.name.toLowerCase()
                        const percentage = (serverUsage[itemLowerCase].usage / serverUsage[itemLowerCase].yMax) * 100

                        if(serverUsageChartRefList.current[index] !== null && serverUsageChartRefList.current[index] !== undefined){
                            serverUsageChartRefList.current[index].data.datasets.map((dataset, index) => {
                                dataset.data.push({
                                    x: Date.now(),
                                    y: serverUsage[itemLowerCase].usage,
                                })
                                serverUsageChartRefList.current[index].update('quiet')
                            })
                        }
                        return (
                            <div key={index} className={`col-md-${12 / convertedList.length} mb-3`}>
                                <Card className={`server-usage__card server-usage__card--${itemLowerCase}`}>
                                    <Card.Body>
                                        <h4 className='mb-0'>{item.name}</h4>
                                        <small>{
                                            (item.name == 'CPU')?
                                            `${percentage.toFixed(1)}%`:
                                            `${serverUsage[itemLowerCase].usage} ${serverUsage[itemLowerCase].unit}(${percentage.toFixed(1)}%)`
                                        }</small>
                                        <div className='ms-n3'>
                                            <RealtimeLineChart
                                                ref={item.refCallbackFunction}
                                                data={serverUsage[itemLowerCase]}
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    <div className="col-12 mb-3">
                        <Card>
                            <Card.Body>
                                <h4 className='mb-4'>Realtime Client Count</h4>
                                <div className='realtime-client-count'>
                                    <RealtimeLineChart
                                        ref={clientCountChartRef}
                                        data={networkStats.subnets}
                                    />
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
                                <SharedNetworkTable sharedNetworks={networkStats.sharedNetworks} />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className='h-100'>
                            <Card.Header>
                                Subnets
                            </Card.Header>
                            <Card.Body>
                                <SubnetTable subnet={networkStats.subnets} />
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
                                <VendorTable vendor={networkStats.vendor} />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className='h-100'>
                            <Card.Header>
                                Vendor Chart
                            </Card.Header>
                            <Card.Body>
                                <VendorChart vendor={networkStats.vendor} />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </AdminLayout>
        )
    }
}

export default Home
