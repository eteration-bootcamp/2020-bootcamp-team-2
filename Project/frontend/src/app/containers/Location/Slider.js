import React, { Component } from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';

export default class Slider extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                height={550}
                                className="d-block w-100"
                                src={"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/03/03/1331847629958_4/geceleri-b%C3%B6yle-bir-manzara-izmir-de-seni-bekliyor.jpg"}
                                alt="First slider"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height={550}
                                className="d-block w-100"
                                src={"https://media.ayder.com.tr/images/tours/2723_birgi-alacati-cesme-izmir-turu/birgi-alacati-cesme-izmir-turu_171226153850.jpg"}
                                alt="Second slider"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        );
    }
}
