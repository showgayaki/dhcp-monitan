import React, { memo } from 'react'
import { ChartDataset, ScatterDataPoint, BubbleDataPoint } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { ja } from 'date-fns/locale'
import { Subnet } from '@models/networks'
import { ColorList } from '@components/ColorList'


type subnetProps = {
    subnetList: Subnet[];
}

export default function RealtimeLineChart(props: subnetProps) {
    const { subnetList } = props

    const datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[] = (
        subnetList.map((subnet, index) =>{
            return {
                label: subnet.location,
                borderColor: ColorList[index],
                backgroundColor: ColorList[index],
                data: [],
            }
        })
    )

    return (
        <Line
            data={{
                datasets: datasets,
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
                            delay: 3000,
                            refresh: 3000,
                            pause: false,
                            ttl: undefined,
                            onRefresh: (chart) => {
                                const now = Date.now()
                                chart.data.datasets.map((dataset, index) => {
                                    dataset.data.push({
                                        x: now,
                                        y: subnetList[index].used,
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
}
