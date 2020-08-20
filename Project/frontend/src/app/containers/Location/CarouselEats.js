import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { getEats } from '../../../api/apiCalls';


const CarouselBox = (props) => {
    const [eatPage, setEatPage] = useState({ content: [], last: true, number: 0 })
    
   
    useEffect(() => {

        loadEats(props.cityId);

    }, [props.cityId]);

    const loadEats = async (cityId) => {
        try {
            const response = await getEats(cityId);

            setEatPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = eatPage;
    //console.log("cafe ID "+content);


    return (
        <div>
            {content.map(eat => {
               
                return (
                    <div>
                        
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={eat.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{eat.eatName}</h3>
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