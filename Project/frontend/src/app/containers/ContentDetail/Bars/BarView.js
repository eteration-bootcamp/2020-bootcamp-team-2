import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const BarView = (props) => {
    const { bar } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{bar.barName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={bar.imageUrl} />
                    </Card>
                </Col>
                <Col md={6} style={{ marginBottom: "200px" }}>
                    {bar.barContent}
                </Col>
            </Row>
        </Container>
    )
};

export default BarView;