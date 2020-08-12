import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import { Redirect} from 'react-router-dom'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function LoginSuccess() {
    const [show, setShow] = useState(true);

    return(
        <>
        <Alert className="alert_showbox" show={show} onClose={() => setShow(false)} dismissible>
          <p>
          <center>Success</center>
          </p>
          
        </Alert>
  
      </>

    );
  

  }

  function LoginFail() {
    const [show, setShow] = useState(true);

    return(
        <>
        <Alert className="alert_showbox_fail" show={show}  onClose={() => setShow(false)} dismissible>
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
        fullName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth , authError } = this.props;
        if(auth.uid) return <Redirect to= '/' />
        return (
            <Container fluid="md">
            <Col>
                <center md={6} className="col-md-offset-6 centered">
                    <Form onSubmit={this.handleSubmit} style={{position:"absolute", zIndex: "3", marginTop:"15%",marginLeft:"30%"}}>
                    
                    <Form.Group controlId="email">
                        <Form.Control onChange={this.handleChange} className="login_register_form" type="email" placeholder="ENTER AN E-MAIL ADDRESS" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control onChange={this.handleChange} className="login_register_form" type="password" placeholder="ENTER A PASSWORD" />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Control className="login_register_form" type="password" placeholder="CONFIRM A PASSWORD" />
                    </Form.Group>

                    <Form.Group controlId="fullName">
                        <Form.Control onChange={this.handleChange} className="login_register_form" type="name" placeholder="ENTER A NAME AND SURNAME" />
                    </Form.Group>
                        
                    <Button className="login_register_button" variant="primary" type="submit">
                        SIGN UP
                    </Button>
                    
                        {authError ? <LoginFail /> : <LoginSuccess />} 
                                  
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


