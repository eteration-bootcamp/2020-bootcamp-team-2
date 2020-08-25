import React from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Input from '../../components/Input';
import { register } from '../../../api/apiCalls';

function LoginFail() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert className="alert_showbox_fail" show={show} onClose={() => setShow(false)} dismissible>
                <p>
                    <center>Fail</center>
                </p>
            </Alert>
        </>
    );
}

class RegisterPage extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        userName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, fullName, userName } = this.state;

        const body = {
            email,
            password,
            fullName,
            userName
        };

        try {
            const response = await register(body);
        }
        catch (error) { }
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <Container fluid="md">
                <Col>
                    <center md={6} className="col-md-offset-6 centered">
                        <Form onSubmit={this.handleSubmit} style={{ position: "absolute", zIndex: "3", marginTop: "15%", marginLeft: "30%" }}>

                            <Input controlId="email" onChange={this.handleChange} className="login_register_form" type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                            <Input controlId="password" onChange={this.handleChange} className="login_register_form" type="password" placeholder="ENTER A PASSWORD" />
                            <Input controlId="confirmPassword" onChange={this.handleChange} className="login_register_form" type="password" placeholder="CONFIRM A PASSWORD" />
                            <Input controlId="fullName" onChange={this.handleChange} className="login_register_form" type="name" placeholder="ENTER A NAME AND SURNAME" />
                            <Input controlId="userName" onChange={this.handleChange} className="login_register_form" type="name" placeholder="ENTER AN USERNAME" />
                            <Button className="login_register_button" variant="primary" type="submit">
                                SIGN UP
                            </Button>
                            {authError ? <LoginFail /> : <></>}
                        </Form>
                    </center>
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)


