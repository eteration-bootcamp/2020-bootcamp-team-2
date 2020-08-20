import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
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
    //console.log("cafe ID "+content);


    return (
        <div>
            {content.map(history => {
               
                return (
                    <div>
                        
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={history.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{history.historicalName}</h3>
                                            <p>Meeting point</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                           
                    </div>
                )


            })}
        </div>
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