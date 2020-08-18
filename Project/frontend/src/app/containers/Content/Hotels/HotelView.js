import React from 'react';
import { CardDeck, Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HotelView = (props) => {
    const { hotel } = props;
    return (
        <Col md={3}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={hotel.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{hotel.hotelName}</Card.Title>
                        <Link to="/ContentDetail"><Button className="card_button navbar_text_color" variant="primary">See and Enjoy</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default HotelView;