import React, { useState, useEffect } from 'react';
import { Dropdown, Carousel, Col, Row } from 'react-bootstrap'
import { getCafes } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'


const CarouselBox = (props) => {
    const [cityPage, setCafePage] = useState({ content: [], last: true, number: 0 })

    useEffect(() => {

        loadCities(props.cityId);

    }, [props.cityId]);

    const loadCities = async (cityId) => {
        try {
            const response = await getCafes(cityId);

            setCafePage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = cityPage;
    //console.log("cafe ID "+content);


    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">CAFE</h1></center></Col>

            {content.map(cafe => {

                return (
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={cafe.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{cafe.cafeName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                        <Link to={{pathname:`/CafeDetail/${cafe.id}`,state:{cafeId : cafe.id}}}  className="card_button">See and Enjoy</Link>

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