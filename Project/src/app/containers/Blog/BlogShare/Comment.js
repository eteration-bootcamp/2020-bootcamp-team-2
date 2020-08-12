import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
class Comment extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col md={2}>
                        <Navbar className="nav flex-column navbar_style_vertical" >
                            <a className="navbar_text_color card_deck_margin" href="#">Eat</a>
                            <a className="navbar_text_color card_deck_margin" href="#">Hotel</a>
                            <a className="navbar_text_color card_deck_margin" href="#">History</a>
                            <a className="navbar_text_color card_deck_margin" href="#">Art</a>

                        </Navbar>

                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Write a comment:</label><br />
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="exampleFormControlFile1">Choose photo:</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <br /><br /> <br /><br />
                            <Button className="card_button navbar_text_color share_button">Share Blog</Button>
                        </Form>
                    </Col>
                </Row>
                <br /><br /> <br />
            </Container>
        )
    }
}


export default Comment