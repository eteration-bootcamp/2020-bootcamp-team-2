import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import { getHotels } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'


const CarouselBox = (props) => {
    const [hotelPage, setHotelsPage] = useState({ content: [], last: true, number: 0 })


    useEffect(() => {

        loadHotels(props.cityId);

    }, [props.cityId]);

    const loadHotels = async (cityId) => {
        try {
            const response = await getHotels(cityId);

            setHotelsPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = hotelPage;
    //console.log("cafe ID "+content);


    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">HOTEL</h1></center></Col>
            {content.map(hotel => {

                return (
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={hotel.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{hotel.hotelName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                                <Link to={{ pathname: `/HotelDetail/${hotel.id}`, state: { hotelId: hotel.id } }} className="card_button">See and Enjoy</Link>

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                )
            })}
        </Row>
    )

}

/*
 <div>
            
             <div>
                <Carousel>
                    <Carousel.Item>
                        <img height={200} className="d-block w-100" src={require('./images/izmir.jpg')} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Clock Tower, IZMIR/TURKEY</h3>
                            <p>Meeting point</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
*/
export default CarouselBox