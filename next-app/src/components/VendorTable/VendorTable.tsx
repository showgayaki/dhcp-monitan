import { Table, ProgressBar } from 'react-bootstrap'
import React from 'react'


type Props = {
    vendor: {[key: string]: number};
}


export default function SubnetStat(props: Props) {
    const { vendor } = props

    return (
        <Table responsive bordered hover>
            <thead className="table-light fw-semibold">
                <tr className="align-middle">
                    <th>Vendor</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {(() => {
                    const items = []
                    for(let key in vendor){
                        items.push(
                            <tr key={key} className="align-middle">
                                <td>{key}</td>
                                <td>{vendor[key]}</td>
                            </tr>
                        )
                    }
                    return items
                })()}
            </tbody>
        </Table>
    )
}
