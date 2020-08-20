import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
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

        <div className="container-fluid"  style={{ marginBottom : "30px"}}>
            <Row>
                {content.map(cafe => {   
                    return ( <CafeView key={cafe.id} cafe={cafe} /> )       
                })}
            </Row>
        </div>
    )
}


export default Cards