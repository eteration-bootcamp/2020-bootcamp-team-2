import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer_style" >
                <Container fluid>
                    <Row>
                        <Col><p>ABOUT</p>
                            <p>This company is a travel-guide wep application.</p>
                        </Col>
                        <Col>
                            <a href="#">PRIVACY POLICY</a>
                        </Col>
                        <Col>
                            <div float="right">© 2020 Copyright:
                            <a href="index.html">TRAWELL</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer