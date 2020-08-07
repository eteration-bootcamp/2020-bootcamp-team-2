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
                <Row className="card_deck_margin">
                    <Col md={3}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe2</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe2</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe5</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="card_deck_margin">
                    <Col md={6}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe6</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe7</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img variant="top" class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Cafe8</Card.Title>
                                <Card.Text>Go And Enjoy!lar</Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                            </Card.ImgOverlay>
                            <Button variant="primary">See And Enjoy!</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Cards