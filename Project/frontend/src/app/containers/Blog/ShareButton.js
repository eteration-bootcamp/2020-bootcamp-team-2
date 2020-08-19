import React from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class ShareButton extends React.Component {
    render() {
        return (
            <Row>
            <Col md={3}></Col>
            <Col md={6}>           
                <Link to="/BlogShare"><Button className="navbar_text_color comment_button">Share Blog</Button></Link>
            </Col>
            </Row>
        )
    }
}

export default ShareButton;