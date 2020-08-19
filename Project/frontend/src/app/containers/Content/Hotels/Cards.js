import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import HotelView from './HotelView';
import { getHotels } from '../../../../api/apiCalls';

const Cards = () => {
    const [hotelPage, setHotelPage] = useState({ content: [] })

    useEffect(() => {

        loadHotels();
    }, []);

    const loadHotels = async (page) => {
        try {
            const response = await getHotels(page);
            setHotelPage(previousHotelPage => ({
                ...response.data,
                content: [...previousHotelPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }
    const { content } = hotelPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.map(hotel => {
                    return ( <HotelView key={hotel.id} hotel={hotel} /> )
                })}
            </Row>
        </div>
    )
}


export default Cards