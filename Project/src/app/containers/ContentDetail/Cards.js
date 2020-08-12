import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';



class Cards extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <h2 className="location_header_style" >Ülkem Kokoreç</h2>
                </Row>
                <Row>
                    <Col md={6} >
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img class="content_grid_card_image" src={require("../../images/oludeniz.jpg")} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3>Address:<br />Tepeüstü, Alemdağ Cd No:568, 34771 Dudullu Osb/Ümraniye/İstanbul</h3>
                    </Col>
                </Row>
                <Row className="card_deck_margin">
                    <Col md={6}>
                        <Row>
                            <Col>
                                <Card.Img className="image_box" src={require("../../images/menton.jpg")} />
                                <Card.Img className="image_box" src={require("../../images/oludeniz.jpg")} />
                                <Card.Img className="image_box" src={require("../../images/grand-canyon.jpg")} />
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
                            <Col md={9}>
                                Güzel bir yemek.
                            </Col>
                            <Col md={3}>
                                4Yıldız
                            </Col>

                        </Row>
                        <Row>
                            <Col md={9}>
                                <input type="text" class="form-control" placeholder="Write a comment" />
                            </Col>
                            <Col md={3}>
                                <Button className="comment_button">Comment</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img style={{ height: "300px" }} src={require("../../images/oludeniz.jpg")} />
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