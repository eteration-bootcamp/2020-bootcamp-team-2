import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardsDetail = ({ cardDetail }) => {
    return (
        <Card className="text-white text-right">
            <Card.Img className="card_img_height" src={cardDetail.url} />
            <Card.ImgOverlay>
                <Card.Title>{cardDetail.title}</Card.Title>
                <Card.Text>
                    Go And Enjoy!lar
                                </Card.Text>
                <Card.Text>3 dk once</Card.Text>
                <Button className="card_button" variant="primary">{cardDetail.button}</Button>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardsDetail