import React, { useRef, UIEvent } from 'react'
import { Form } from 'react-bootstrap'


type Props = {
    text: string;
    rows: number;
}

export default function LogsTextarea(props: Props){
    const { text, rows } = props
    const rowNumbers = Array.from(Array(rows).keys()).map(index => index + 1).join('\n')

    // 行数テキストエリアと、ログテキストを同時にスクロールする
    const leftElem = useRef<HTMLTextAreaElement>(null!)
    const rightElem = useRef<HTMLTextAreaElement>(null!)
    const handleScroll = (isLeft: boolean) => {
      isLeft
        ? (rightElem.current.scrollTop = leftElem.current.scrollTop)
        : (leftElem.current.scrollTop = rightElem.current.scrollTop)
    }

    return (
        <Form.Group className="terminal">
            <Form.Control
                ref={leftElem}
                className="terminal__rows"
                as="textarea"
                readOnly
                wrap='off'
                value={rowNumbers}
                rows={rows}
                onScroll={() => {handleScroll(true)}}
            />
            <Form.Control
                ref={rightElem}
                className="terminal__textarea"
                as="textarea"
                readOnly wrap='off'
                value={text}
                rows={rows}
                onScroll={() => {handleScroll(false)}}
            />
        </Form.Group>
    )
}
