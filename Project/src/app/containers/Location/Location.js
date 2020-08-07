import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

class CarouselBox extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img height={200} className="d-block w-100" src={require('./images/izmir.jpg')} alt="Third slide" margin='30px' />
                    <Carousel.Caption>
                        <Button variant="info">+</Button>{' '}
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={200} className="d-block w-100" src={require('./images/izmir2.jpg')} alt="Third slide" margin='30px' />
                    <Carousel.Caption>
                        <Button variant="info">+</Button>{' '}
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
class Location extends React.Component {
    render() {
        return (
            <div className="mb-2" >
                <Container fluid>
                    <Row><Carousel>
                        <Carousel.Item>
                            <img
                                height={300}
                                className="d-block w-100"
                                src={require('./images/izmir.jpg')}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height={300}
                                className="d-block w-100"
                                src={require('./images/izmir2.jpg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel></Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>

                            <Dropdown>
                                <Dropdown.Toggle className="location_header_style" variant="outline-info" id="dropdown-basic">
                                    Please select a country
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Turkey</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Spain</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Germany</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Italy</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>



                        </Col>
                        <Col xs={6} md={4}>
                            <center>
                                <Dropdown>
                                    <Dropdown.Toggle className="location_header_style" variant="outline-info" id="dropdown-basic">
                                        Please select a city
                                </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">İzmir</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">İstanbul</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Ankara</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </center>


                        </Col>
                        <Col xs={6} md={4}>
                            <center>
                                <Button className="location_header_style" variant="outline-info">SELECT</Button>{' '}

                            </center>

                        </Col>
                    </Row>

                </Container>


                <Container fluid>
                    <Row>
                        <Col>
                            <div className="header">
                                <div className="header-text">
                                    <center><h1 className="location_header_style">IZMIR</h1></center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>



                <Container fluid>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">EAT</h1></center></Col>
                            <Col ><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">HOTEL</h1></center></Col>
                            <Col ><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">HISTORY</h1></center></Col>
                            <Col ><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                        </Row>
                    </div>
                </Container>



            </div >
        )

    }
}



export default Location;

