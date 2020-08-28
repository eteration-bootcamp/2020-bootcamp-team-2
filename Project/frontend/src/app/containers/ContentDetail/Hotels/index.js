import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import HotelView from './HotelView';
import { getHotels } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
  const [hotelPage, setHotelPage] = useState({ content: [] })
  const history = useHistory();
  useEffect(() => {

    loadHotels();

  }, []);

  const loadHotels = async (page) => {

    try {
      const response = await getHotels(page);
      console.log(response)
      setHotelPage({
        content: [...response.data.content]
      })
    } catch (error) { }
  }
  const { content } = hotelPage;

  return (
    <div className="container-fluid">
      <Row>
        {content.filter(item => history.location.state.hotelId === item.id).map(hotel => {

          return <HotelView key={hotel.id} hotel={hotel} />

        }
        )}
      </Row>
    </div>
  )
}

export default Cards