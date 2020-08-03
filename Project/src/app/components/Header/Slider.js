import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img_cover"
                        src={require("../../images/varnelfall.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img_cover"
                        src={require("../../images/menton.jpg")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img_cover"
                        src={require("../../images/oludeniz.jpg")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }


}
export default Slider







/*
class Slider extends React.Component {
    render() {
        return (
            <div className="jumbotron-default">
                <div id = "carouselExampleCaptions" className = "carousel slide" dataRide = "carousel">
                    <ol className="carousel-indicators">
                        <li dataTarget = "#carouselExampleCaptions" dataSlideTo="0" className="active"></li>
                        <li dataTarget = "#carouselExampleCaptions" dataSlideTo="1"></li>
                        <li dataTarget = "#carouselExampleCaptions" dataSlideTo="2"></li>
                    </ol>
                    <div className = "carousel-inner">
                        <div className = "carousel-item-active">
                            <img src = {require('../../images/varnelfall.jpg')} className="d-block w-100 img_cover" alt="Varnel Falls" ></img>
                            <div className = "carousel-caption d-none d-md-block">
                                <h5>Varnel Falls - California</h5>
                                <p>If you haven't discovered it yet, it might be great to start with Venton Valley!</p>
                            </div>
                        </div>
                        <div className = "carousel-item">
                            <img src= {require('../../images/menton.jpg')}  className= "d-block w-100 img_cover" alt = "Menton"></img>
                            <div className = "carousel-caption d-none d-md-block">
                                <h5>Menton - France</h5>
                                <p>Menton's colorful structure will turn your head!</p>
                            </div>
                        </div>
                        <div className = "carousel-item">
                            <img src= {require('../../images/oludeniz.jpg')}  className= "d-block w-100 img_cover" alt = "Menton"></img>
                            <div className = "carousel-caption d-none d-md-block">
                                <h5>Ölüdeniz - Türkiye</h5>
                                <p>A good reason to go to Turkey!</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" dataSlide="prev">
                        <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" dataSlide="next">
                        <span className="carousel-control-next-icon" ariaHidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
*/