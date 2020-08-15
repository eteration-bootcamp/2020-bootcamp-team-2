import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import BlogList from "../../../components/BlogList";

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
                        <BlogList />
                    </Col>
                </Row>
                <br /><br />
            </Container>

        )
    }
}


export default Cards