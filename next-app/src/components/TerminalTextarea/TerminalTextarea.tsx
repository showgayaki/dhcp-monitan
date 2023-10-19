import { type } from 'os'
import React from 'react'
import { Form } from 'react-bootstrap'


type Props = {
    text: string;
    rows: number;
}

export default function LogsTextarea(props: Props){
    const { text, rows } = props
    return (
        <Form.Group>
          <Form.Control className="terminal" as="textarea" readOnly value={text} rows={rows} />
        </Form.Group>
    )
}
