import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";
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
        <Container fluid className="margin_bottom_20">
            <Header />
            <Row>
                {content.map(eat => {
                    return (<EatView key={eat.id} eat={eat} />)
                })}
            </Row>
        </Container>
    )
}

export default Cards