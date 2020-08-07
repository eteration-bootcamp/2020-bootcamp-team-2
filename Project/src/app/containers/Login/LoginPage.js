import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class LoginPage extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Col md={6} className="mx-auto">
                    <Form style={{ position: "absolute", zIndex: "3", marginTop:"45%", marginLeft:"10%" }}> 

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="login_register_form" type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="login_register_form" type="password" placeholder="ENTER A PASSWORD" />
                        </Form.Group>
                        <Button className="login_register_button login_button_width" variant="primary" type="submit">
                            FORGET PASSWORD?
                            </Button>
                        <Button className="login_register_button login_button_width" variant="primary" type="submit">
                            LOGIN
                        </Button>

                    </Form>
                </Col>

            </Container>
        )
    }
}

export default LoginPage;
