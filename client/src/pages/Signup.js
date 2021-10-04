import React, { useState } from 'react'
import Navigation from '../component/header/Navigations'
import { Container, Button, Form, Card } from 'react-bootstrap'

const Signup = () => {

    const [getUser, setUser] = useState({ 
        username : '', 
        email: '', 
        password: '',
        retype_password: '' 
    })

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
                    <Form.Control onChange={ inputChange } name="username" type="text" placeholder="Username" />
                    <br/>
                    <Form.Control onChange={ inputChange } name="email" type="email" placeholder="Your email" />
                    <br/>
                    <Form.Control onChange={ inputChange } name="password" type="password" placeholder="Your password" />
                    <br />
                    <Form.Control onChange={ inputChange } name="retype_password" type="password" placeholder="Retype Your password" />
                    <br />
                    <Button onClick={ inputUser }>Signup</Button>
                </Card>
            </Container>
        </>
     )
}
 
export default Signup