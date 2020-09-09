import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import { getBars } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'

const CarouselBox = (props) => {
    const [barPage, setBarPage] = useState({ content: [] })
    useEffect(() => {
        loadBars(props.cityId);
    }, [props.cityId]);

    const loadBars = async (cityId) => {
        try {
            const response = await getBars(cityId);
            setBarPage({
                content: [...response.data]
            })

        } catch (error) { }
    }

    const { content } = barPage;
    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">BAR</h1></center></Col>
            {content.map(bar => {
                return (
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={bar.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{bar.barName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                                <Link to={{ pathname: `/BarDetail/${bar.id}`, state: { barId: bar.id } }} className="btn btn-primary">See and Enjoy</Link>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                )
            })}
        </Row>
    )
}

export default CarouselBox