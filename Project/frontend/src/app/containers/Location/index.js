import React from 'react';
import { Dropdown, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import CountryList from '../../components/CountryList'
import CityList from '../../components/CityList'
import CarouselBox from './CarouselBox'

class Location extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countryId : 1

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
                                    height={500}
                                    className="d-block w-100"
                                    src={"https://media.ayder.com.tr/images/tours/2723_birgi-alacati-cesme-izmir-turu/birgi-alacati-cesme-izmir-turu_171226153850.jpg"}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Alaçatı, IZMIR </h3>
                                    <p>For a pleasant walk among the FLOWERS!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    height={500}
                                    className="d-block w-100"
                                    src={"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/03/03/1331847629958_4/geceleri-b%C3%B6yle-bir-manzara-izmir-de-seni-bekliyor.jpg"}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Konak, IZMIR</h3>
                                    <p>Meeting point!</p>
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
                                        <CountryList onSelectCountryId = {this.setCountry}/>
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

                <Container fluid style={{ marginBottom: "50px"}}>
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
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">CAFE</h1></center></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">ACTIVITY</h1></center></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                            <Col><CarouselBox /></Col>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <Col md={2}><center><h1 className="location_component_style">BAR</h1></center></Col>
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

