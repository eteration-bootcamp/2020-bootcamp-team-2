import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom';
class Cards extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Navbar className="nav flex-column navbar_style_vertical" >
                            <a className="navbar_text_color card_deck_margin" href="#">Eat</a>
                            <a className="navbar_text_color card_deck_margin" href="#">Hotel</a>
                            <a className="navbar_text_color card_deck_margin" href="#">History</a>
                            <a className="navbar_text_color card_deck_margin" href="#">Art</a>
                            <Button className="card_button navbar_text_color share_button">Share Blog</Button>
                        </Navbar>

                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Row>
                            <h3 className="location_header_style">Turkey-Istanbul-Kadıkoy-Blog</h3>
                        </Row>
                        <Row>
                            <Col md={6} className="card_deck_margin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
                            <Col md={6}>
                                <Card className="text-white text-right card_deck_margin">
                                    <Card.Img className="card_img_height" src={require("../../../images/oludeniz.jpg")} />
                                    <Card.ImgOverlay>
                                        <Card.Title>Content</Card.Title>
                                        <Card.Text>Go And Enjoy!lar</Card.Text>
                                        <Card.Text>3 dk once</Card.Text>
                                        <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Card className="text-white text-right card_deck_margin">
                                    <Card.Img className="card_img_height" src={require("../../../images/oludeniz.jpg")} />
                                    <Card.ImgOverlay>
                                        <Card.Title>Content</Card.Title>
                                        <Card.Text>Go And Enjoy!lar</Card.Text>
                                        <Card.Text>3 dk once</Card.Text>
                                        <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col md={6} className="card_deck_margin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
                        </Row>
                    </Col>
                </Row>
                <br /><br />
            </Container>

        )
    }
}


export default Cards