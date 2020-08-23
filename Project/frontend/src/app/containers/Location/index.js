import React from 'react';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';
import CountryList from '../../components/CountryList'
import CityList from '../../components/CityList'
import CarouselCafes from './CarouselCafes'
import CarouselBars from './CarouselBars'
import CarouselEats from './CarouselEats'
import CarouselHistory from './CarouselHistory'
import CarouselHotels from './CarouselHotels'
import CarouselActivities from './CarouselActivities'
import Slider from './Slider'

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countryId: null,
            cityId: 1,
            cityName: 'Istanbul',
            selectCountry: "Please select a country",
            selectCity: " Please select a city"
        }
    };

    setCountry = (countryId, countryName) => {
        this.setState({
            countryId: countryId,
            selectCountry: countryName
        })
    };

    setCity = (cityId, cityName) => {
        this.setState({
            cityId: cityId,
            cityName: cityName,
            selectCity: cityName
        })

    };

    render() {
        return (

            <div className="mb-2" >
                <Slider />
                <Container fluid>
                    <div className='mt-5'>
                        <Row>
                            <Col md={1}></Col>
                            <Col >
                                <Dropdown>
                                    <Dropdown.Toggle className="location_header_style button_shadow" variant="outline-info" id="dropdown-basic">
                                        {this.state.selectCountry}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <CountryList onSelectCountryId={this.setCountry} />
                                        {console.log("country İD" + this.state.countryId)}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={1}></Col>
                            <Col>
                                <center>
                                    <Dropdown>
                                        <Dropdown.Toggle className="location_header_style button_shadow" variant="outline-info" id="dropdown-basic">
                                            {this.state.selectCity}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <CityList countryId={this.state.countryId} setCity={this.setCity} />
                                            {console.log("city İD" + this.state.cityId)}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </center>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </div>
                </Container>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="header">
                                <div className="header-text">
                                    <center><h1 className="location_header_style">{this.state.cityName}</h1></center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid style={{ marginBottom: "50px" }}>
                    <div className='mt-5'>
                        <CarouselEats cityId={this.state.cityId} />
                    </div>
                    <div className='mt-5'>
                        <CarouselHotels cityId={this.state.cityId} />
                    </div>
                    <div className='mt-5'>
                        <CarouselHistory cityId={this.state.cityId} />
                    </div>
                    <div className='mt-5'>
                        <CarouselCafes cityId={this.state.cityId} />
                    </div>
                    <div className='mt-5'>
                        <CarouselActivities cityId={this.state.cityId} />
                    </div>
                    <div className='mt-5'>
                        <CarouselBars cityId={this.state.cityId} />
                    </div>
                </Container>



            </div >
        )

    }
}



export default Location;

