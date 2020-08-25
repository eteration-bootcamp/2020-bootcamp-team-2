import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import EatView from './EatView';
import { getEats } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
    const [eatPage, setEatPage] = useState({ content: [] })
    const history = useHistory();
    useEffect(() => {

        loadEats();

    }, []);

    const loadEats = async (page) => {

        try {
            const response = await getEats(page);
            console.log(response)
            setEatPage({
                content: [...response.data.content]
            })
        } catch (error) { }
    }
    const { content } = eatPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.filter(item => history.location.state.eatId === item.id).map(eat => {

                    return <EatView key={eat.id} eat={eat} />

                }
                )}
            </Row>
        </div>
    )
}


export default Cards