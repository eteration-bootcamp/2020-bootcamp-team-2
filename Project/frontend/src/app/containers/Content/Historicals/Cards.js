import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
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

        <div className="container-fluid" style={{ marginBottom: "30px" }}>
            <Row>
                {content.map(historical => {
                    return (<HistoricalView key={historical.id} historical={historical} />)
                })}
            </Row>
        </div>
    )
}


export default Cards