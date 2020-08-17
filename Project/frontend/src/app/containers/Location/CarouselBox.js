import React from 'react';
import { Dropdown, Carousel } from 'react-bootstrap'

export default class CarouselBox extends React.Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle className="location_card_button" id="dropdown-basic">+</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Add visited places</Dropdown.Item>
                        <Dropdown.Item href="#">Add places to visit</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Carousel>
                    <Carousel.Item>
                        <img height={200} className="d-block w-100" src={require('./images/izmir.jpg')} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={200} className="d-block w-100" src={require('./images/izmir2.jpg')} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}