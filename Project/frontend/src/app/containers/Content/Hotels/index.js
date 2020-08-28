import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";
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
    <Container fluid className="margin_bottom_20">
      <Header />
      <Row>
        {content.map(hotel => {
          return (<HotelView key={hotel.id} hotel={hotel} />)
        })}
      </Row>
    </Container>
  )
}

export default Cards