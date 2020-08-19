import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const HistoricalView = (props) => {
    const { historical } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{historical.historicalName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={historical.imageUrl} />
                    </Card>
                </Col>
                <Col md={6}>
                    {historical.historicalContent}
                </Col>
            </Row>
        </Container>
    )
};

export default HistoricalView;