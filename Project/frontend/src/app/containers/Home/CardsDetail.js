import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CardsDetail = ({ cardDetail }) => {
    return (
        <Card className="text-white text-right">
            <Card.Img className="card_img_height" src={cardDetail.url} />
            <Card.ImgOverlay>
                <Card.Title className="navbar_text_color">{cardDetail.title}</Card.Title>
                <Link to={cardDetail.linkto}>
                    <Button className="card_button navbar_text_color">{cardDetail.button}</Button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardsDetail