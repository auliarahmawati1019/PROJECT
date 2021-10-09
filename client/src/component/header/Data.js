import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const Data = () => {

    const { pathname } = window.location

    const isUserLogin = () => {
        return (
            <div className="data">
                <Navbar bg="primary" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">PT. Melia Sehat Sejahtera</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" active={ pathname === '/' }>Home</Nav.Link>
                            <NavDropdown title="profil" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Masterd">Data master</NavDropdown.Item>
                                <NavDropdown.Item href="/surat">Surat Izin Usaha</NavDropdown.Item>
                                <NavDropdown.Item href="/visi">Visi Dan Misi</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Member" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                             </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Data