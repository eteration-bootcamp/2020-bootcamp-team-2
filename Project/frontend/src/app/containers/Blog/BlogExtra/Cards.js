import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BlogNavbar from '../BlogNavbar'
import Container from 'react-bootstrap/Container'
import BlogList from "../../../components/BlogList";
class Cards extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <BlogNavbar />
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <BlogList />
                    </Col>
                </Row>
                <br /><br />
            </Container>
        )
    }
}


export default Cards