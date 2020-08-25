import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const ActivityView = (props) => {
    const { activity } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{activity.activityName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={activity.imageUrl} />
                    </Card>
                </Col>
                <Col md={6} style={{ marginBottom: "200px" }}>
                    {activity.activityContent}
                </Col>
            </Row>
        </Container>
    )
};

export default ActivityView;