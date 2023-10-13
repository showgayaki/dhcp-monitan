import { Table, ProgressBar } from 'react-bootstrap'
import React from 'react'
import { SharedNetwork } from '@models/networks'


type Props = {
    sharedNetworks: SharedNetwork[];
}


export default function NetworkStats(props: Props) {
    const { sharedNetworks } = props

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
