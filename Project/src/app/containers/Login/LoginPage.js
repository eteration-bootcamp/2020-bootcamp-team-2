import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class LoginPage extends React.Component {
    render() {
        const styleForm = {
            marginRight: "20px",
            backgroundColor: "#FFFFFF",
            color: "#000",
            border: "1px solid #24a19c",
            width: "420px",
            opacity: "0.7",
            fontFamily: "Mv Boli"


        };
        const styleButton = {
            marginRight: "20px",
            backgroundColor: "#24a19c",
            color: "#fff",
            border: "1px solid #24a19c",
            borderRadius: "50px",
            width: "200px",
            fontFamily: "Mv Boli"
        };

        return (
            <Container fluid="md">
                <Col md={6} className="mx-auto">
                    <Form style={{ position: "absolute", zIndex: "3", marginTop:"45%", marginLeft:"10%" }}> 

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control style={styleForm} type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control style={styleForm} type="password" placeholder="ENTER A PASSWORD" />
                        </Form.Group>
                        <Button style={styleButton} variant="primary" type="submit">
                            FORGET PASSWORD?
                            </Button>
                        <Button style={styleButton} variant="primary" type="submit">
                            LOGIN
                        </Button>

                    </Form>
                </Col>

            </Container>
        )
    }
}

export default LoginPage;
