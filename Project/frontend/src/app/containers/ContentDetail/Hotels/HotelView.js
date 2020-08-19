import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const HotelView = (props) => {
    const { hotel } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{hotel.hotelName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={hotel.imageUrl} />
                    </Card>
                </Col>
                <Col md={6}>
                    {hotel.hotelContent}
                </Col>
            </Row>
        </Container>
    )
};

export default HotelView;