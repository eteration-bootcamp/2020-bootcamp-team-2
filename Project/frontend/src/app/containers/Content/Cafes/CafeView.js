import React from 'react';
import { CardDeck, Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CafeView = (props) => {
    const { cafe } = props;
    return (
        <Col md={3}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={cafe.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{cafe.cafeName}</Card.Title>
                        <Link to={{pathname:`/CafeDetail/${cafe.id}`,state:{cafeId : cafe.id}}}  className="card_button navbar_text_color">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default CafeView;