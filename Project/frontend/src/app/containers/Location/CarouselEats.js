import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import { getEats } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'


const CarouselBox = (props) => {
    const [eatPage, setEatPage] = useState({ content: [], last: true, number: 0 })


    useEffect(() => {

        loadEats(props.cityId);

    }, [props.cityId]);

    const loadEats = async (cityId) => {
        try {
            const response = await getEats(cityId);

            setEatPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = eatPage;
    //console.log("cafe ID "+content);


    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">EAT</h1></center></Col>

            {content.map(eat => {

                return (
                    <Col>

                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={eat.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{eat.eatName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                                <Link to={{ pathname: `/EatDetail/${eat.id}`, state: { eatId: eat.id } }} className="card_button">See and Enjoy</Link>

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