import { Table, ProgressBar } from 'react-bootstrap'
import React from 'react'
import { SharedNetwork } from '@models/networks'


type Props = {
    sharedNetworks: SharedNetwork[];
}


export default function NetworkStats(props: Props) {
    const { sharedNetworks } = props

    const percentage = (used: number, defined: number) => {
        return Math.floor((used / defined) * 1000) / 1000 * 100
    }

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
                                    <div className="fw-semibold">{percentage(network.used, network.defined)}%</div>
                                </div>
                                <div className="float-end">
                                </div>
                            </div>
                            <ProgressBar className="progress-thin" variant="success" now={percentage(network.used, network.defined)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
