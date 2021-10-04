import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = () => {

    const { pathname } = window.location

    const isUserLogin = () => {
        return (
            <>
                <Nav.Link href="#link">Data Master</Nav.Link>
                <NavDropdown title="Penjualan" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </>
        )
    }

    return (
        <div className="navigation">
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">PT. Melia Sehat Sejahtera</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={ pathname === '/' }>Home</Nav.Link>
                        <NavDropdown title="profil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/perusahaan">Profil Perusahaan</NavDropdown.Item>
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

export default Navigation