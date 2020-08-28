import React, { useState, useEffect } from 'react';
import BarView from './BarView';
import { getBars } from '../../../../api/apiCalls';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";

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
        <Container fluid className="margin_bottom_20">
            <Header />
            <Row>
                {content.map(bar => {
                    return (<BarView key={bar.id} bar={bar} />)
                })}
            </Row>
        </Container >
    )
}

export default Cards