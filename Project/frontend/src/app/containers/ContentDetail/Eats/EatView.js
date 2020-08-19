import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const EatView = (props) => {
    const { eat } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{eat.eatName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={eat.imageUrl} />
                    </Card>
                </Col>
                <Col md={6} style={{ marginBottom : "200px"}}>
                    {eat.eatContent}
                </Col>
            </Row>
        </Container>
    )
};

export default EatView;