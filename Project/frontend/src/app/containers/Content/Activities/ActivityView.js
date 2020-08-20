import React from 'react';
import { CardDeck, Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActivityView = (props) => {
    const { activity } = props;
    return (
        <Col md={3} style={{ marginBottom : "20px"}}>
            <CardDeck className="margin_top_20" >
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={activity.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="navbar_text_color">{activity.activityName}</Card.Title>
                        <Link to={{pathname:`/ActivityDetail/${activity.id}`,state:{activityId : activity.id}}}  className="card_button">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>
    )
};

export default ActivityView;