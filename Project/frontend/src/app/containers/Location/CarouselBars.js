import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { getBars } from '../../../api/apiCalls';


const CarouselBox = (props) => {
    const [barPage, setBarPage] = useState({ content: [], last: true, number: 0 })
    
   
    useEffect(() => {

        loadBars(props.cityId);

    }, [props.cityId]);

    const loadBars = async (cityId) => {
        try {
            const response = await getBars(cityId);

            setBarPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = barPage;
    //console.log("cafe ID "+content);


    return (
        <div>
            {content.map(bar => {
               
                return (
                    <div>
                        
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={bar.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{bar.barName}</h3>
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