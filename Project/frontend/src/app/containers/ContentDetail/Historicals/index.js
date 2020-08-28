import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import HistoricalView from './HistoricalView';
import { getHistoricals } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
  const [historicalPage, setHistoricalPage] = useState({ content: [] })
  const history = useHistory();
  useEffect(() => {

    loadHistoricals();

  }, []);

  const loadHistoricals = async (page) => {

    try {
      const response = await getHistoricals(page);
      console.log(response)
      setHistoricalPage({
        content: [...response.data.content]
      })
    } catch (error) { }
  }
  const { content } = historicalPage;

  return (

    <div className="container-fluid">
      <Row>
        {content.filter(item => history.location.state.historicalId === item.id).map(historical => {

          return <HistoricalView key={historical.id} historical={historical} />

        }
        )}
      </Row>
    </div>
  )
}

export default Cards