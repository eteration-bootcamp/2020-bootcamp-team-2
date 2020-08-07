import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class RegisterPage extends React.Component {  
    render() {
        return (
            <Container fluid="md">
            <Col>
                <center md={6} className="col-md-offset-6 centered">
                    <Form style={{position:"absolute", zIndex: "3", marginTop:"15%",marginLeft:"30%"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="login_register_form" type="name" placeholder="ENTER A NAME AND SURNAME" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="login_register_form" type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className="login_register_form" type="password" placeholder="ENTER A PASSWORD" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className="login_register_form" type="password" placeholder="CONFIRM A PASSWORD" />
                    </Form.Group>
                        
                    <Button className="login_register_button" variant="primary" type="submit">
                        SIGN UP
                    </Button>                 
                </Form>                

                </center>
            </Col>           
            
            </Container>
        )
    }
}

export default RegisterPage
