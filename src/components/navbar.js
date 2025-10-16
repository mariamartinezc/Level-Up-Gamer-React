import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPrincipal() {
    console.log('Componente montado');

    return (
        <div className='row'>
            <div className='col-lg-12'>
                <Navbar bg="primary" data-bs-theme="dark" expand="lg">
                    <Container >
                        <Navbar.Brand href="#home"><img src='/assets/images/Logo.png' style={{ width: '50px' }}></img> Level-Up Gamer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Productos</Nav.Link>
                                <NavDropdown title="Quien somos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Blogs
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
}

export default NavbarPrincipal;