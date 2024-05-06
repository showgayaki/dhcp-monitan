import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {
    Button, Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap'
import { SyntheticEvent, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next'
import { AutoHideToast } from '@components/Toast'


const Login: NextPage = () => {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getRedirect = () => {
        const redirect = getCookie('redirect')
        if (redirect) {
            deleteCookie('redirect')
            return redirect.toString()
        }

        return '/'
    }

    const login = async (e: SyntheticEvent) => {
        e.stopPropagation()
        e.preventDefault()

        setSubmitting(true)

        const inputData = {
            'username': username,
            'password': password,
        }

        const res = await axios.post('api/mock/login', inputData)
        if (res.status === 200) {
            if(res.data.login){
                router.push(getRedirect())
            }else{
                setShowToast(true)
            }
        }
        setSubmitting(false)
    }

    // autofocus to username input
    const inputElement = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(inputElement.current){
            inputElement.current.focus()
        }
    }, []);

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
            <Container>
                <Row className="justify-content-center align-items-center px-3">
                    <Col md={6} className="position-relative bg-white border p-5">
                        <div className="">
                            <h1>Login</h1>
                            <p className="text-black-50">Sign In to your account</p>

                            <form onSubmit={login}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            fixedWidth
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        ref={inputElement}
                                        name="username"
                                        required
                                        disabled={submitting}
                                        placeholder="Username"
                                        aria-label="Username"
                                        onChange={
                                            (e) => {
                                                setUsername(e.target.value)
                                                setShowToast(false)
                                            }
                                        }
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon
                                            icon={faLock}
                                            fixedWidth
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        required
                                        disabled={submitting}
                                        placeholder="Password"
                                        aria-label="Password"
                                        onChange={
                                            (e) => {
                                                setPassword(e.target.value)
                                                setShowToast(false)
                                            }
                                        }
                                    />
                                </InputGroup>

                                <Row>
                                    <Col xs={6}>
                                        <Button className="px-4" variant="primary" type="submit" disabled={submitting}>Login</Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                        <AutoHideToast
                            show={showToast}
                            title='Login FAILED!'
                            body='Invalid username or password.'
                            bg='warning'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
