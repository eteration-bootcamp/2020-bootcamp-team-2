import React from 'react';
import { CardDeck, Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EatView = (props) => {
    const { eat } = props;
    return (
        <Col md={3}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={eat.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{eat.eatName}</Card.Title>
                        <Link to="/ContentDetail"><Button className="card_button navbar_text_color" variant="primary">See and Enjoy</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default EatView;