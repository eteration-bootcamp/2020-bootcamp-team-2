import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect} from 'react-router-dom'
import axios from 'axios'
class LoginPage extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to= '/' />
        return (
            <Container fluid="md">
                <Col md={6} className="mx-auto">
                    <Form onSubmit={this.handleSubmit} style={{ position: "absolute", zIndex: "3", marginTop: "45%", marginLeft: "10%" }}>

                        <Form.Group controlId="email">
                            <Form.Control onChange={this.handleChange} className="login_register_form" type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Control onChange={this.handleChange} className="login_register_form" type="password" placeholder="ENTER A PASSWORD" />
                        </Form.Group>

                        <Button className="login_register_button login_button_width" variant="primary" type="submit">
                            FORGET PASSWORD?
                        </Button>

                        <Button className="login_register_button login_button_width" variant="primary" type="submit">
                            LOGIN
                        </Button>
                        <div className="red-text center" style={{ backgroundColor: 'white'}}>
                            {authError ? <p style={{ color: 'red' }}>{authError}</p> : <p style={{color : 'green'}}></p>} 
                        </div>
                    </Form>

                </Col>


            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
