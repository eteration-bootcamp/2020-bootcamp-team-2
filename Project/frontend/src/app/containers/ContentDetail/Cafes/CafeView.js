import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const CafeView = (props) => {
    const { cafe } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{cafe.cafeName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={cafe.imageUrl} />
                    </Card>
                </Col>
                <Col md={6} style={{ marginBottom : "200px"}}>
                    {cafe.cafeContent}
                </Col>
            </Row>
        </Container>
    )
};

export default CafeView;