import React from 'react';
import { CardDeck, Container, Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class ShareButton extends React.Component {
    render() {
        return (
            <Col md={4}>           
                <Link to="/BlogShare"><Button className="navbar_text_color comment_button">Share Blog</Button></Link>
            </Col>
        )
    }
}

export default ShareButton;