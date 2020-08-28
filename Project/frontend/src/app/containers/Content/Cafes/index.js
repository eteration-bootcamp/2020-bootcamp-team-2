import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";
import CafeView from './CafeView';
import { getCafes } from '../../../../api/apiCalls';

const Cards = () => {
  const [cafePage, setCafePage] = useState({ content: [] })

  useEffect(() => {

    loadCafes();
  }, []);

  const loadCafes = async (page) => {
    try {
      const response = await getCafes(page);
      setCafePage(previousCafePage => ({
        ...response.data,
        content: [...previousCafePage.content, ...response.data.content]
      }))
    } catch (error) { }
  }
  const { content } = cafePage;

  return (
    <Container fluid className="margin_bottom_20">
      <Header />
      <Row>
        {content.map(cafe => {
          return (<CafeView key={cafe.id} cafe={cafe} />)
        })}
      </Row>
    </Container>
  )
}

export default Cards