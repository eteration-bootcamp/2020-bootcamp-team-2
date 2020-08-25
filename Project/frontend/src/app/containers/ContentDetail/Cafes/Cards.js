import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import CafeView from './CafeView';
import { getCafes } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
    const [cafePage, setCafePage] = useState({ content: [] })
    const history = useHistory();
    useEffect(() => {

        loadCafes();

    }, []);

    const loadCafes = async (page) => {

        try {
            const response = await getCafes(page);
            console.log(response)
            setCafePage({
                content: [...response.data.content]
            })
        } catch (error) { }
    }
    const { content } = cafePage;

    return (

        <div className="container-fluid">
            <Row>
                {content.filter(item => history.location.state.cafeId === item.id).map(cafe => {

                    return <CafeView key={cafe.id} cafe={cafe} />

                }
                )}
            </Row>
        </div>
    )
}


export default Cards