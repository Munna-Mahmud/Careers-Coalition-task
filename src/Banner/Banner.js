import React from 'react';
import './Banner.css';
import img1 from '../images/mountain1 (1).jpg'
import img2 from '../images/carucel.jpg'
import img3 from '../images/carusel1 (3).jpg'
import { Carousel, Col, Row } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            {/* middle caroucel banner section  */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       <h1>01.HISTORY</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <Carousel.Caption>
                       <h1>02.HISTORY</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Carousel.Caption>
                       <h1>03.HISTORY</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                <Col xs={6}><h1>02.CLIMB</h1></Col>
                <Col xs={6}> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugiat ipsum dolores hic rerum possimus voluptatem?</p></Col>
            </Row>
           
        </div>
    )
};

export default Banner;