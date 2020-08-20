import React, { useState, useEffect } from 'react';
import { Carousel , Row, Col} from 'react-bootstrap'
import { getHistoricals } from '../../../api/apiCalls';


const CarouselBox = (props) => {
    const [historyPage, setHistoryPage] = useState({ content: [], last: true, number: 0 })
    
   
    useEffect(() => {

        loadHistory(props.cityId);

    }, [props.cityId]);

    const loadHistory = async (cityId) => {
        try {
            const response = await getHistoricals(cityId);

            setHistoryPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = historyPage;

    return (
        <Row>
                            <Col md={2}><center><h1 className="location_component_style">HISTORY</h1></center></Col>
                            
            {content.map(history => {
               
                return (
                    <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={history.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{history.historicalName}</h3>
                                            <p>Meeting point</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>    
                    </Col>
                )
            })}
        </Row>
    )

}

/*
 <div>
            
             <div>
                <Carousel>
                    <Carousel.Item>
                        <img height={200} className="d-block w-100" src={require('./images/izmir.jpg')} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Clock Tower, IZMIR/TURKEY</h3>
                            <p>Meeting point</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
*/
export default CarouselBox