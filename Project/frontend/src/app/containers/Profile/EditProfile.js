import React, { useState } from 'react';
import { Container, Row, Col, Button, Tabs, Tab, Image, Form } from 'react-bootstrap'

function EditProfilePage() {
  const [key, setKey] = useState('editProfile');
  return (
    <div>
      <Container>
        <Row >
          <Col md={4}>
            <center>
              <Image className="edit_profile_image" src={require('../../images/profile/user.png')} rounded />
              <h3 class="profile-font-style">Name Surname</h3>
            </center>
          </Col>
          <Col md={8} >
            <Tabs className="profile-font-style margin_top_20" defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>

              <Tab eventKey="editProfile" title=" Edit Profile" >
                <Form className="margin_bottom_20">
                  <Form.Group controlId="formName">
                    <Form.Label className="profile-font-style">Name</Form.Label>
                    <Form.Control className="login_register_form" placeholder="Name" />
                  </Form.Group>

                  <Form.Group controlId="formSurname">
                    <Form.Label className="profile-font-style">Surname</Form.Label>
                    <Form.Control className="login_register_form" placeholder="Surname" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="profile-font-style">Email address</Form.Label>
                    <Form.Control className="login_register_form" type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="profile-font-style" >Password</Form.Label>
                    <Form.Control className="login_register_form" type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group>
                    <Form.File className="profile-font-style" id="exampleFormControlFile1" label="Select a file" />
                  </Form.Group>
                  <Button className="login_register_button " variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="settings" title="Settings" ></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditProfilePage;