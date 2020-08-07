import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'

class ProfilePage extends React.Component {
    render() {

        const imgStyle = {
            width: 100,
            height: 100,
            margin: "20px",
        }

        const cardStyle = {
            margin: "20px",
            height: 400,

        }
        return (
            <div>
                <Container>
                    <Row md={6} >
                        <Col md={4}>
                        <Media style={{margin: "20px"}} as="li">
                            <img
                                width={100}
                                height={100}
                                margin={"20px"}
                                className="mr-3"
                                src={require('./images/user.png')}/>
                        <Media.Body>
                            <center><h5 style={{marginTop: "10px"}}>Name Surname</h5>

                            <Button style={{margin: "10px"}} variant="outline-success">Edit</Button>
                            <Button style={{margin: "10px"}} variant="outline-success">Settings</Button>
                            </center>
                            <p style={{marginTop: "20px", float:"left"}}>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. 
                            </p>

                                

                        </Media.Body>
                        </Media>


                        </Col>
                        


                        <Col md={4} >
                            <center><h2 style={{ margin: "20px" }}>Visited Places</h2></center>
                            <ListGroup style={{ margin: "20px" }}>
                                <ListGroup.Item>İzmir</ListGroup.Item>
                                <ListGroup.Item>Ankara</ListGroup.Item>
                                <ListGroup.Item>İstanbul</ListGroup.Item>
                                <ListGroup.Item>Antalya</ListGroup.Item>
                                <ListGroup.Item>Bursa</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4} >
                            <center><h2 style={{ margin: "20px" }}>Places To Visit</h2></center>
                            <ListGroup style={{ margin: "20px" }}>
                                <ListGroup.Item>İzmir</ListGroup.Item>
                                <ListGroup.Item>Ankara</ListGroup.Item>
                                <ListGroup.Item>İstanbul</ListGroup.Item>
                                <ListGroup.Item>Antalya</ListGroup.Item>
                                <ListGroup.Item>Bursa</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>


                    <Row md={3}>
                        <Col md={4}>
                            <Card style={cardStyle}>
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={8}>
                            <Card style={cardStyle}>
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir2.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row md={3}>
                        <Col md={8}>
                            <Card style={cardStyle}>
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir2.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={4}>
                            <Card style={cardStyle}>
                                <Card.Img style={{ height: 200 }} variant="top" src={require('../Location/images/izmir.jpg')} />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read</Button>
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