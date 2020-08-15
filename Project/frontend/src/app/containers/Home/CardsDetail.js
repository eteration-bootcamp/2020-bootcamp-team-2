import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const CardsDetail = ({ cardDetail }) => {
    return (
        <Card className="text-white text-right">
            <Card.Img className="card_img_height" src={cardDetail.url} />
            <Card.ImgOverlay>
                <Card.Title>{cardDetail.title}</Card.Title>
                <Card.Text style={{ marginTop: "40%" }}>Go And Enjoy</Card.Text>
                <Link to="/Content">
                    <Button className="card_button">{cardDetail.button}</Button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardsDetail