import type { NextPage } from 'next'
import { Card } from 'react-bootstrap'
import React from 'react'
import { AdminLayout } from '@layout'
import { SettingsForm } from '@components/SettingsForm'


const Settings: NextPage = () => {
    return (
        <AdminLayout>
            <Card>
                <Card.Header>
                    Monitan Settings
                </Card.Header>
                <Card.Body>
                    <SettingsForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}

export default Settings
