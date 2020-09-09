import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import { getActivities } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'

const CarouselBox = (props) => {
    const [activityPage, setActivityPage] = useState({ content: [] })
    useEffect(() => {
        loadActivity(props.cityId);
    }, [props.cityId]);

    const loadActivity = async (cityId) => {
        try {
            const response = await getActivities(cityId);
            setActivityPage({
                content: [...response.data]
            })

        } catch (error) { }
    }

    const { content } = activityPage;
    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">ACTIVITY</h1></center></Col>
            {content.map(activity => {
                return (
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={activity.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{activity.activityName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                                <Link to={{ pathname: `/ActivityDetail/${activity.id}`, state: { activityId: activity.id } }} className="btn btn-primary card_button">See and Enjoy</Link>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                )
            })}
        </Row>
    )
}

export default CarouselBox