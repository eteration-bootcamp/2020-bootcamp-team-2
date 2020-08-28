import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";
import HistoricalView from './HistoricalView';
import { getHistoricals } from '../../../../api/apiCalls';

const Cards = () => {
  const [historicalPage, setHistoricalPage] = useState({ content: [] })

  useEffect(() => {

    loadHistoricals();
  }, []);

  const loadHistoricals = async (page) => {
    try {
      const response = await getHistoricals(page);
      setHistoricalPage(previousHistoricalPage => ({
        ...response.data,
        content: [...previousHistoricalPage.content, ...response.data.content]
      }))
    } catch (error) { }
  }
  const { content } = historicalPage;

  return (
    <Container fluid className="margin_bottom_20">
      <Header />
      <Row>
        {content.map(historical => {
          return (<HistoricalView key={historical.id} historical={historical} />)
        })}
      </Row>
    </Container>
  )
}

export default Cards