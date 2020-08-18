import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import EatView from './EatView';
import { getEats } from '../../../../api/apiCalls';

const Cards = () => {
    const [eatPage, setEatPage] = useState({ content: [] })

    useEffect(() => {

        loadEats();
    }, []);

    const loadEats = async (page) => {
        try {
            const response = await getEats(page);
            setEatPage(previousEatPage => ({
                ...response.data,
                content: [...previousEatPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }
    const { content } = eatPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.map(eat => {
                    if (eat.id) {
                        return (
                            <EatView key={eat.id} eat={eat} />
                        )
                    }
                })}
            </Row>
        </div>
    )
}


export default Cards