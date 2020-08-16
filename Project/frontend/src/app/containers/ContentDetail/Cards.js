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
                    <h2 className="location_header_style">Loop Cafe</h2>
                </Row>
                <Row>
                    <Col md={6} >
                        <Card class="content_grid_card" className="text-white text-right">
                            <Card.Img class="content_grid_card_image" src={"https://b.zmtcdn.com/data/pictures/8/18480208/0071ba5033cddbe529bf8ab7a9992b82.jpg?output-format=webp"} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3>
                            Kahve, Çay <br />
                            Kadıköy Merkez <br />
                            Açılış saati 09:00 <br />
                        </h3>
                    </Col>
                </Row>
                <Row className="card_deck_margin">
                    <Col md={6}>
                        <Row>
                            <Col><Card.Img className="image_box" src={"https://b.zmtcdn.com/data/pictures/8/18480208/3071b4f9f2be780e8b0b0369f39ab41b.jpg?output-format=webp"} /></Col>
                            <Col><Card.Img className="image_box" src={"https://b.zmtcdn.com/data/pictures/8/18480208/873792551c2bb5e8353bcbd1bb77dce3.jpg?output-format=webp"} /></Col>
                            <Col><Card.Img className="image_box" src={"https://b.zmtcdn.com/data/pictures/8/18480208/dfe7a51f3503f88284954311bccee74f.jpg?output-format=webp"} /> </Col>
                        </Row>

                        <Row className="card_deck_margin">
                            <Col md={9}>
                                En güzel kahveler burada yapılıyor.
                            </Col>
                            <Col md={3}>
                                Birhan ÖZÇELİK
                            </Col>
                        </Row>

                        <Row className="card_deck_margin">
                            <Col md={9}>
                                Arkadaşlarınızla bulaşabileceğiniz güzel bir mekan.
                            </Col>
                            <Col md={3}>
                                Güliz AKKAYA
                            </Col>
                        </Row>
                        <Row className="card_deck_margin">
                            <Col md={9}>
                                Çalışanları harika.
                            </Col>
                            <Col md={3}>
                                Merve YILDIRIM
                            </Col>
                        </Row>
                        <Row className="card_deck_margin">
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