import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Mountain.css'

const Mountain = () => {
    return (
        <div>
            {/* its a footer section mountain banner  */}
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">MOUNTAIN1</Nav.Link>
                        <Nav.Link href="#features">MOUNTAIN2</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <div className="mountain-img">
              
                <div className=" detail-text ">
                <h1>SCHEDULE</h1>
                  <div className="d-flex">
                  <div className="ms-4 " >
                        <h3>25 Nov 2016</h3>
                        <h3>28 Nov 2016</h3>
                        <h3>18 Dec 2016</h3>
                        <h3>7 Jan 2017</h3>
                    </div>
                    <div className='ms-3'>
                        <h3>Vestibulum viverra</h3>
                        <h3>Vestibulum viverra</h3>
                        <h3>Vestibulum viverra</h3>
                        <h3>Vestibulum viverra</h3>
                        
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Mountain;