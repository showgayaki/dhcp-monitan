import { ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import React from 'react'
import { ColorList } from '@components/ColorList';


type Props = {
    vendor: {[key: string]: number};
}

export default function VendorChart(props: Props) {
    const { vendor } = props

    const labels: string[] = []
    const data: number[] = []
    for(const key in vendor){
        labels.push(key)
        data.push(vendor[key])
    }

    const doughnutData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: ColorList.slice(0, labels.length + 1),
            hoverOffset: 4
        }]
    }
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }

    return (
        <Doughnut data={doughnutData} options={options} />
    )
}
