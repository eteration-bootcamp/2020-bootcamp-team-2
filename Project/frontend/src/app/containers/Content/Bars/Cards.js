import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import BarView from './BarView';
import { getBars } from '../../../../api/apiCalls';

const Cards = () => {
    const [barPage, setBarPage] = useState({ content: [] })

    useEffect(() => {

        loadBars();
    }, []);

    const loadBars = async (page) => {
        try {
            const response = await getBars(page);
            setBarPage(previousBarPage => ({
                ...response.data,
                content: [...previousBarPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }
    const { content } = barPage;

    return (

        <div className="container-fluid"  style={{ marginBottom : "30px"}}>
            <Row>
                {content.map(bar => {               
                    return ( <BarView key={bar.id} bar={bar} /> )
                })}
            </Row>
        </div>
    )
}


export default Cards