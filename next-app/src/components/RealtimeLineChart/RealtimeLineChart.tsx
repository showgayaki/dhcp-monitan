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

    const plugin = {
        id: "increase-legend-spacing",
        beforeInit(chart: any) {
            // Get reference to the original fit function
            const originalFit = chart.legend.fit

            // Override the fit function
            chart.legend.fit = function fit() {
                // Call original function and bind scope in order to use `this` correctly inside it
                originalFit.bind(chart.legend)()
                // Change the height as suggested in another answers
                this.height += 20
            }
        }
    }

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
                            delay: 500,
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
                        display: true,
                        align: 'start',
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            }}
            plugins={[plugin]}
        />
    )

    return useMemo(() => chart, [])
}
