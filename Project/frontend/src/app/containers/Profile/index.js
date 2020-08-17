import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row md={6} >
                        <Col md={4}>
                            <Media style={{ margin: "20px" }} as="li">
                                <img alt="bilmiyorum" className="mr-3 profile-image-style" src={require('./images/user.png')} />
                                <Media.Body>
                                    <center><h5 className="profile-font-style" style={{ marginTop: "10px" }}>Name Surname</h5>
                                        <Link to="/EditProfile">
                                            <Button className="w-100 profile_button">Edit Profile</Button>
                                        </Link>
                                        <p style={{ marginTop: "20px", float: "left" }}>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo.
                                    </p>
                                    </center>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md={4} >
                            <center><h2 className="profile-font-style" style={{ margin: "20px" }}>Visited Places</h2></center>
                            <ListGroup style={{ margin: "20px", overflowY: "scroll", maxHeight: '250px' }}>
                                <ListGroup.Item>İzmir</ListGroup.Item>
                                <ListGroup.Item>Ankara</ListGroup.Item>
                                <ListGroup.Item>İstanbul</ListGroup.Item>
                                <ListGroup.Item>Antalya</ListGroup.Item>
                                <ListGroup.Item>Bursa</ListGroup.Item>
                                <ListGroup.Item>Muğla</ListGroup.Item>
                                <ListGroup.Item>Rize</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4} >
                            <center><h2 className="profile-font-style" style={{ margin: "20px" }}>Places To Visit</h2></center>
                            <ListGroup style={{ margin: "20px", overflowY: "scroll", maxHeight: '250px' }}>
                                <ListGroup.Item>İzmir</ListGroup.Item>
                                <ListGroup.Item>Ankara</ListGroup.Item>
                                <ListGroup.Item>İstanbul</ListGroup.Item>
                                <ListGroup.Item>Antalya</ListGroup.Item>
                                <ListGroup.Item>Bursa</ListGroup.Item>
                                <ListGroup.Item>Muğla</ListGroup.Item>
                                <ListGroup.Item>Rize</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row md={3}>
                        <Col md={4}>
                            <Card className="profile-card-style">
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Link to="/BlogExtra">
                                        <Button className="profile_button">Read</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card className="profile-card-style">
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir2.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Link to="/BlogExtra">
                                        <Button className="profile_button">Read</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row md={3}>
                        <Col md={4}>
                            <Card className="profile-card-style">
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir2.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Link to="/BlogExtra">
                                        <Button className="profile_button">Read</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="profile-card-style">
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Link to="/BlogExtra">
                                        <Button className="profile_button">Read</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="profile-card-style">
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Link to="/BlogExtra">
                                        <Button className="profile_button">Read</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </div>
        )

    }
}

export default ProfilePage;