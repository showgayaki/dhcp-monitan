import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { ja } from 'date-fns/locale'
import { Subnet } from '@models/networks'
import { ColorList } from '@components/ColorList'


type subnetProps = {
    subnetList: Subnet[];
}

export default function RealtimeLineChart(props: subnetProps) {
    const { subnetList } = props

    const datasets = (subnets: Subnet[]) => (
        subnets.map((subnet, index) => {
            return {
                label: subnet.location,
                borderColor: ColorList[index],
                backgroundColor: ColorList[index],
                data: [],
            }
        })
    )
    const chart = (
        <Line
            data={{
                datasets: datasets(subnetList),
            }}
            options={{
                scales: {
                    x: {
                        type: 'realtime',
                        adapters: {
                            date: {
                                locale: ja,
                            },
                        },
                        time: {
                            unit: 'second',
                        },
                        realtime: {
                            duration: 50000,
                            delay: 0,
                            refresh: Number(process.env.NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS) * 1000,
                            pause: false,
                            ttl: undefined,
                            onRefresh: (chart) => {
                                chart.data.datasets.map((dataset, index) => {
                                    dataset.data.push({
                                        x: Date.now(),
                                        y: subnetList[index].used,
                                        // y: Math.random(),
                                    })
                                })
                            },
                        },
                    },
                    y: {
                        min: 0,
                        // max: 100,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            }}
        />
    )

    return useMemo(() => chart, [])
}
