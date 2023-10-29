import { Table, ProgressBar } from 'react-bootstrap'
import React from 'react'
import { Subnet, SharedNetwork } from '@models/networks'


type sharedNetworkProps = {
    sharedNetworks: SharedNetwork[];
}

type subnetProps = {
    subnet: Subnet[];
}

const calcPecentage = (used: number, defined: number) => {
    const percentageString = (used / defined * 100).toString()
    return Number(Number.parseFloat(percentageString).toFixed(2))
}

const variant = (percentage: number) => {
    switch(true){
        case percentage >= 90:
            return 'danger'
        case percentage >= 80:
            return 'warning'
        default:
            return 'info'
    }
}


export function SharedNetworkTable(props: sharedNetworkProps) {
    const { sharedNetworks } = props

    let percentage = 0
    return (
        <Table responsive bordered hover>
            <thead className="table-light fw-semibold">
                <tr className="align-middle">
                    <th>Location</th>
                    <th>Used</th>
                    <th>Utilization</th>
                </tr>
            </thead>
            <tbody>
                {sharedNetworks.map((network, index) => (
                    <tr key={index} className="align-middle">
                        <td>
                            {network.location}
                        </td>
                        <td>
                            {network.used}
                        </td>
                        <td className='w-50'>
                            <div className="clearfix">
                                <div className="float-start">
                                    <div className="fw-semibold">
                                        {(() => {
                                            percentage = calcPecentage(network.used, network.defined)
                                            return percentage
                                        })()}&nbsp;%
                                    </div>
                                </div>
                                <div className="float-end">
                                </div>
                            </div>
                            <ProgressBar className="progress-thin" variant={variant(percentage)} now={percentage} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}


export function SubnetTable(props: subnetProps) {
    const { subnet } = props

    let percentage = 0
    return (
        <Table responsive bordered hover>
            <thead className="table-light fw-semibold">
                <tr className="align-middle">
                    <th>Location</th>
                    <th>IP Range</th>
                    <th>Used</th>
                    <th>Utilization</th>
                </tr>
            </thead>
            <tbody>
                {subnet.map((network, index) => (
                    <tr key={index} className="align-middle">
                        <td>
                            {network.location}/{network.cidr}
                        </td>
                        <td>
                            {network.range}
                        </td>
                        <td>
                            {network.used}
                        </td>
                        <td className='w-50'>
                            <div className="clearfix">
                                <div className="float-start">
                                    <div className="fw-semibold">
                                        {(() => {
                                            percentage = calcPecentage(network.used, network.defined)
                                            return percentage
                                        })()}&nbsp;%
                                    </div>
                                </div>
                                <div className="float-end">
                                </div>
                            </div>
                            <ProgressBar className="progress-thin" variant={variant(percentage)} now={percentage} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
