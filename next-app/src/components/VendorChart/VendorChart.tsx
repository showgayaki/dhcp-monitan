import { Doughnut } from 'react-chartjs-2'
import React from 'react'


type Props = {
    vendor: {[key: string]: number};
}

export default function VendorChart(props: Props) {
    const { vendor } = props
    const backgroundColorList = [
        '#a6cee3',
        '#1f78b4',
        '#b2df8a',
        '#33a02c',
        '#fb9a99',
        '#e31a1c',
        '#fdbf6f',
        '#ff7f00',
        '#cab2d6',
        '#6a3d9a',
        '#ffff99',
        '#b15928',
    ]

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
            backgroundColor: backgroundColorList.slice(0, labels.length + 1),
            hoverOffset: 4
        }]
    }
    const options = {
        responsive: true,
        legend: {
            position: 'right',
        }
    }

    return (
        <Doughnut data={doughnutData} options={options} />
    )
}
