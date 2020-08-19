import React from 'react';
import { CardDeck, Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HistoricalView = (props) => {
    const { historical } = props;
    return (
        <Col md={3} style={{ marginBottom : "20px"}}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={historical.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{historical.historicalName}</Card.Title>
                        <Link to={{pathname:`/HistoryDetail/${historical.id}`,state:{historicalId : historical.id}}}  className="card_button">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default HistoricalView;