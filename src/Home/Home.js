import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Mountain from '../Mountain/Mountain';
import './Home.css'

import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div >
            <div className="banner-img">

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="center justify-content-center align-items-center">
                            <div className="justify-content-center hero-content align-items-center">
                        
                                <h1 className=" text-white d-block">LOSANGELES <br /> <span className='span_text'>MOUNTAINS</span></h1>
                              
                            </div>

                        </div>
                     

                    </Col>
                </Row>

            </div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Mountain></Mountain>
        </div>
    );
};

export default Home;