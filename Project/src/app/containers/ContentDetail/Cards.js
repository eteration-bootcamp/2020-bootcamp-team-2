import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../../../index.css';

class Cards extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row><Col><h2>Lokanta Alsancak</h2></Col></Row>
                <Row style={{ marginBottom: "20px" }}>
                    <Col md={6} >
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img class="content_grid_card_image" variant="top" src={require("../../images/oludeniz.jpg")} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3>Information</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col>
                                Foto Gelecek
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9}>
                                Harika bir yemek.
                            </Col>
                            <Col md={3}>
                                5Yıldız
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9}>
                                Güzel bir yemek.
                            </Col>
                            <Col md={3}>
                                4Yıldız
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button>Yorumyap</button>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={6}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Google Comment</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Cards