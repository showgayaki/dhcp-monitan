import React, { useState, useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

type Props = {
    show: boolean;
    title: string;
    body: string;
    bg: string;
}

export function AutoHideToast(props: Props){
    const { show, title, body, bg } = props
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        setShowToast(show)
    }, [show])

    return (
        <ToastContainer
            className="p-3"
            position="bottom-center"
            style={{ zIndex: 1 }}
        >
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} bg={bg} autohide>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>
                    {body}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
