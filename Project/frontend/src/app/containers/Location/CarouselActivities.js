import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { getActivities } from '../../../api/apiCalls';


const CarouselBox = (props) => {
    const [activityPage, setActivityPage] = useState({ content: [], last: true, number: 0 })
    
   
    useEffect(() => {

        loadActivity(props.cityId);

    }, [props.cityId]);

    const loadActivity = async (cityId) => {
        try {
            const response = await getActivities(cityId);

            setActivityPage({

                content: [...response.data]

            })

        } catch (error) { }
    }

    const { content } = activityPage;
    //console.log("cafe ID "+content);


    return (
        <div>
            {content.map(activity => {
               
                return (
                    <div>
                        
                                <Carousel>
                                    <Carousel.Item>
                                        <img height={200} className="d-block w-100" src={activity.imageUrl} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>{activity.activityName}</h3>
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