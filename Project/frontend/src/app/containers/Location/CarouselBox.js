import React, { useState, useEffect } from 'react';
import { Dropdown, Carousel, Col, Row } from 'react-bootstrap'
import { getCafes } from '../../../api/apiCalls';


const CarouselBox = (props) => {
    const [cityPage, setCafePage] = useState({ content: [], last: true, number: 0 })
    
    useEffect(() => {

        loadCities(props.cityId);

    }, [props.cityId]);

    const loadCities = async (cityId) => {
        try {
            const response = await getCafes(cityId);

            setCafePage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = cityPage;
    //console.log("cafe ID "+content);


    return (
        <div>
            {content.map(cafe => {
               
                return (
                    <div>
                        
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={cafe.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{cafe.cafeName}</h3>
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