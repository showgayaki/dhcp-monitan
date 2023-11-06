import React, { useMemo, forwardRef, ForwardedRef, MutableRefObject, useCallback } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import { ja } from 'date-fns/locale'
import { Usage } from '@models/server-usage'
import { Subnet } from '@models/networks'
import { ColorList } from '@components/ColorList'


type Props = {
    data: Subnet[] | Usage;
}

export default forwardRef(function RealtimeLineChart(props: Props, ref) {
// export default function RealtimeLineChart(props: Props, ref) {
    const { data } = props
    const verifyDataType = (data: any): data is Subnet[] => {
        // Subnet[]型に強制キャストしてlengthプロパティがあればSubnet[]型とする
        return !!(data as Subnet[])?.length
    }
    const isSubnetList = verifyDataType(data)
    const chartRef = ref as MutableRefObject<Chart<'line'>>

    const datasets = () => {
        if(isSubnetList){
            return (
                data.map((subnet, index) => {
                    return {
                        label: `${subnet.location}/${subnet.cidr}`,
                        borderColor: ColorList[index],
                        backgroundColor: ColorList[index],
                        data: [],
                    }
                }
                )
            )
        }else{
            return [{
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1,
                fill: true,
                lineTension: 1,
                data: [],
            }]
        }
    }

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
            ref={chartRef}
            data={{
                datasets: datasets(),
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
                            displayFormats: {
                                'second': 'HH:mm:ss',
                                'minute': 'HH:mm:ss',
                            },
                        },
                        realtime: {
                            duration: 50000,
                            delay: 300,
                            refresh: undefined,
                            pause: false,
                            ttl: undefined,
                        },
                    },
                    y: {
                        min: 0,
                        max: (isSubnetList)? undefined: data.yMax,
                    },
                },
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: isSubnetList,
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

    if(!isSubnetList){
        ['x', 'y'].map((axis) => {
            // y軸にはタイトル(単位)表示
            chart.props.options.scales[axis].title = (axis === 'y')?{
                display: true,
                color: 'rgba(255, 255, 255, 0.8)',
                text: data.unit,
            }: undefined

            // drawBorder： trueをx, y両軸に設定するとy = 0の線が
            // 二重に描かれているようなので、y軸の時にみtrueにする
            chart.props.options.scales[axis].grid = {
                drawBorder: (axis === 'y')? true: false,
                color: 'rgba(255, 255, 255, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
            }
            chart.props.options.scales[axis].ticks = {
                color: 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
            }
        })

        chart.props.options.radius = 0
    }

    return useMemo(() => chart, [])
})
// }
