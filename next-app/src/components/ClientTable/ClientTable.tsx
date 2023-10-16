import React, { ReactNode } from 'react'
import { Table } from 'react-bootstrap'
import { Client } from '@models/client'


type Props = {
    type: string;
    clientList: Client[];
}

export default function ClientTable(props: Props) {
    const { type, clientList } = props

    return (
        <Table responsive bordered hover className="fs-7">
            <thead className="table-light fw-semibold">
                <tr className="align-middle">
                    <th>IP</th>
                    <th>Hostname</th>
                    <th>MAC</th>
                    <th>Vendor</th>
                    <th>Start</th>
                    { (type == 'static')? false: <th>End</th> }
                </tr>
            </thead>
            <tbody>
            {clientList.map((client, index) => {
                const clientNode: ReactNode[] = []
                clientNode.push(
                    <tr key={index} className="align-middle">
                        <td>{client.ip_address}</td>
                        <td>{client.hostname}</td>
                        <td>{client.mac_address}</td>
                        <td>{client.vendor}</td>
                        <td>{client.start}</td>
                        { (type == 'static')? false: <td>{client.end}</td> }
                    </tr>
                )
                    return clientNode
                }
            )}
            </tbody>
        </Table>
    )
}
