import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const CardsDetail = ({ contentCardDetail }) => {
    return (
        <Card className="text-white text-right">
            <Card.Img className="card_img_height" src={contentCardDetail.url} />
            <Card.ImgOverlay>
                <Card.Title>{contentCardDetail.title}</Card.Title>
                <Link to="/ContentDetail">
                    <Button className="card_button" variant="primary">{contentCardDetail.button}</Button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardsDetail