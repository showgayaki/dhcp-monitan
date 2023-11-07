import React from 'react'
import { Form } from 'react-bootstrap'


export default function SettingsForm() {
    return (
        <Form className='fs-7 fw-bold text-secondary'>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_NEXTAUTH_URL</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_NEXTAUTH_URL} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_API_BASE_URL</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_API_BASE_URL} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_API_MAX_RETRY</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_API_MAX_RETRY} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_DHCP_CONF_FILE_PATH</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_DHCP_CONF_FILE_PATH} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_DHCP_LEASE_FILE_PATH</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_DHCP_LEASE_FILE_PATH} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_DHCP_LOG_FILE_PATH</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_DHCP_LOG_FILE_PATH} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_TZ</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_TZ} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_LOCALE</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_LOCALE} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_TZ</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_TZ} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_USERNAME</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_USERNAME} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>NEXT_PUBLIC_PASSWORD</Form.Label>
                <Form.Control size='sm' type="text" value={process.env.NEXT_PUBLIC_PASSWORD} readOnly />
            </Form.Group>
        </Form>
    )
}
