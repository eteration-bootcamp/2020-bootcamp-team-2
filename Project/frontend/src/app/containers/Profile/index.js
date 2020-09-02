import React from 'react';
import { Container, Row, Col, Button, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../Blog/Cards'

class ProfilePage extends React.Component {
    render() {
        return (
            <Container>
                <Row md={6} >
                    <Col md={6}>
                        <Media className="margin_top_20" as="li">
                            <img alt="bilmiyorum" className="mr-3 profile-image-style" src={require('../../images/profile/user.png')} />
                            <Media.Body>
                                <center>
                                    <h5 className="profile-font-style margin_top_20">Merve Yıldırım</h5>
                                    <Link to="/EditProfile">
                                        <Button className="w-100 profile_button">Edit Profile</Button>
                                    </Link>
                                    <p className="margin_top_20">
                                        I live in Istanbul. I am very happy to learn about different cultures, travel and share my travels.
                                    </p>
                                </center>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Cards />
                </Row>
            </Container>
        )
    }
}

export default ProfilePage