import React from 'react';
import { CardDeck, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EatView = (props) => {
    const { eat } = props;
    return (
        <Col md={3} style={{ marginBottom: "20px" }}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={eat.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{eat.eatName}</Card.Title>
                        <Link to={{ pathname: `/EatDetail/${eat.id}`, state: { eatId: eat.id } }} className="card_button">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default EatView;