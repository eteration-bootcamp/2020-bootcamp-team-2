import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withTranslation } from 'react-i18next';
class Slider extends React.Component {
    render() {
        //const { t } = this.props;
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 slider_image" src={"https://images.ctfassets.net/wqkd101r9z5s/1jk8yG1rGtYb6f7g1ZhfEi/cd17d221ef97fc5c5039aee7e6ab0291/Lead-Paris-view-point.jpg"} alt="First slide" />
                        <Carousel.Caption>
                            <h3>Paris, FRANCE</h3>
                            <p>Haven't discovered it yet?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 slider_image" src={"https://media.timeout.com/images/105305352/1024/576/image.jpg"} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Amsterdam, NETHERLANDS</h3>
                            <p>Great place to spend the day!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 slider_image" src={"https://turkishairlines.ssl.cdn.sdlmedia.com/image/636075459329345757KK.jpg"} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Batman, TURKEY</h3>
                            <p>If this was America, would you like it !?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

const SliderWithTranslation = withTranslation()(Slider);

export default SliderWithTranslation;
