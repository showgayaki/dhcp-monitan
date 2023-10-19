import React from 'react'
import { Form } from 'react-bootstrap'


type Props = {
    text: string;
    rows: number;
}

export default function LogsTextarea(props: Props){
    const { text, rows } = props
    const rowNumbers = Array.from(Array(rows).keys()).map(index => index + 1).join('\n')
    return (
        <Form.Group className="terminal">
          <Form.Control className="terminal__rows" as="textarea" readOnly value={rowNumbers} rows={rows} />
          <Form.Control className="terminal__textarea" as="textarea" readOnly value={text} rows={rows} />
        </Form.Group>
    )
}
