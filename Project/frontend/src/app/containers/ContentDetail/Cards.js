import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';



class Cards extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <h2 className="location_header_style">Loop Cafe</h2>
                </Row>
                <Row>
                    <Col md={6} >
                        <Card class="" className="text-white text-right">
                            <Card.Img class="card_img_height" src={"https://b.zmtcdn.com/data/pictures/8/18480208/0071ba5033cddbe529bf8ab7a9992b82.jpg?output-format=webp"} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3>
                            Kahve, Çay <br />
                            Kadıköy Merkez <br />
                            Açılış saati 09:00 <br />
                        </h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Cards