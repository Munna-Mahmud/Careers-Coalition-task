import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">LOSANGELES <br /> <span className='text-primary'>MOUNTAINS</span></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">1.HISTORY</Nav.Link>
                        <Nav.Link href="#pricing">2.TEAM</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;