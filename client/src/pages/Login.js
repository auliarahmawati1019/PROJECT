import React, { useState } from 'react'
import Navigation from '../component/header/Navigations'
import { Container, Button, Form, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [getUser, setUser] = useState({ email: '', password: '' })
    const histori = useHistory()

    const inputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...getUser, [name]: value })
    }

    const inputUser = () => {
        console.log(getUser)
    }

    const goTo = () => {
        histori.push('/visi')
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
                    <Button onClick={ inputUser }>Login</Button>
                    <br />
                    <Button onClick={ goTo }>Sample to visi - misi</Button>
                </Card>
            </Container>
        </>
    )
}
 
export default Login