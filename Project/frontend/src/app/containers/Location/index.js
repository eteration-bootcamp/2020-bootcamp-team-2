import React from 'react';
import { Dropdown, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import CountryList from '../../components/CountryList'
import CityList from '../../components/CityList'
import CarouselBox from './CarouselBox'

class Location extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countryId : null

        }
    };

    setCountry = (countryId) => {
        this.setState({
            countryId
        }) 
        
    };
    render() {
        return (
            <div className="mb-2" >
                <Container fluid>
                    <Row>
                        <Carousel>
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
                        </Carousel>
                    </Row>
                </Container>
                <Container fluid>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}></Col>
                            <Col >
                                <Dropdown>
                                    <Dropdown.Toggle className="location_header_style button_shadow" variant="outline-info" id="dropdown-basic">
                                        Please select a country
                                </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {/* Pickerdan birşey seçildiğinde countryID bilgisini cityList componentine gönder. */}
                                        <CountryList />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <center>
                                    <Dropdown>
                                        <Dropdown.Toggle className="location_header_style button_shadow" variant="outline-info" id="dropdown-basic">
                                            Please select a city
                                </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {/* CityList componentine gelen CountryId bilgisini prop olarak geç ve şehirleri servisten çağır */}
                                            <CityList countryId = {this.state.countryId} />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </center>
                            </Col>
                            <Col>
                                <center>
                                    <Button className="location_header_style button_shadow" variant="outline-info">SELECT</Button>{' '}
                                </center>
                            </Col>
                        </Row>
                    </div>

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
                            <Col><CarouselBox /></Col>
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

