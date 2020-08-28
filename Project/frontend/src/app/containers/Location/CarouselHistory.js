import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import { getHistoricals } from '../../../api/apiCalls';
import { Link } from 'react-router-dom'

const CarouselBox = (props) => {
    const [historyPage, setHistoryPage] = useState({ content: [] })
    useEffect(() => {
        loadHistory(props.cityId);
    }, [props.cityId]);

    const loadHistory = async (cityId) => {
        try {
            const response = await getHistoricals(cityId);
            setHistoryPage({
                content: [...response.data]
            })

        } catch (error) { }
    }

    const { content } = historyPage;

    return (
        <Row>
            <Col md={2}><center><h1 className="location_component_style">HISTORY</h1></center></Col>
            {content.map(history => {
                return (
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img height={200} className="d-block w-100" src={history.imageUrl} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>{history.historicalName}</h3>
                                    <p>Meeting point</p>
                                </Carousel.Caption>
                                <Link to={{ pathname: `/HistoryDetail/${history.id}`, state: { historicalId: history.id } }} className="card_button">See and Enjoy</Link>

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                )
            })}
        </Row>
    )
}

export default CarouselBox