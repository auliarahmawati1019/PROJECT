import React, { useState } from 'react'
import Navigation from '../component/header/Navigations'
import { Container, Button, Form, Card } from 'react-bootstrap'

function Login() {
    
    const [getUser, setUser] = useState({ email: '', password: '' })

    const inputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...getUser, [name]: value })
    }

    const inputUser = () => {
        console.log(getUser)
    }

    return (
        <>
            <Navigation />
            <Container>
                <Card>
                    <h3>Login</h3>
                    <br />
                    <Form.Control onChange={inputChange} name="email" type="email" placeholder="Your email" />
                    <br />
                    <Form.Control onChange={inputChange} name="password" type="password" placeholder="Your password" />
                    <br />
                    <Button onClick={inputUser}>Login</Button>
                </Card>
            </Container>
        </>
    )
}
 
export default Login