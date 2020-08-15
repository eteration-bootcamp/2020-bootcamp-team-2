import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BlogNavbar from './BlogNavbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
class Cards extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <BlogNavbar />
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Row>
                            <Card className="text-white text-right">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="text-white text-right card_deck_margin">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Row>
                            <Card className="text-white text-right  ">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="text-white text-right card_deck_margin ">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Row>
                            <Card className="text-white text-right  ">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="text-white text-right card_deck_margin ">
                                <Card.Img className="card_img_height" src={require("../../images/oludeniz.jpg")} />
                                <Card.ImgOverlay>
                                    <Card.Title>Content</Card.Title>
                                    <Card.Text>Go And Enjoy!lar</Card.Text>
                                    <Card.Text>3 dk once</Card.Text>
                                    <Link to="/Content"><Button className="card_button">See And Enjoy!</Button></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <br /><br />
            </Container>

        )
    }
}


export default Cards