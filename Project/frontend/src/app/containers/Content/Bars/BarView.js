import React from 'react';
import { CardDeck, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BarView = (props) => {
    const { bar } = props;
    return (
        <Col md={3} className="margin_bottom_20">
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={bar.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{bar.barName}</Card.Title>
                        <Link to={{ pathname: `/BarDetail/${bar.id}`, state: { barId: bar.id } }} className="card_button">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default BarView;