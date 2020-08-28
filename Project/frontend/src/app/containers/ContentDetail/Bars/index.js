import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import BarView from './BarView';
import { getBars } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
    const [barPage, setBarPage] = useState({ content: [] })
    const history = useHistory();
    useEffect(() => {

        loadBars();

    }, []);

    const loadBars = async (page) => {

        try {
            const response = await getBars(page);
            console.log(response)
            setBarPage({
                content: [...response.data.content]
            })
        } catch (error) { }
    }
    const { content } = barPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.filter(item => history.location.state.barId === item.id).map(bar => {

                    return <BarView key={bar.id} bar={bar} />

                }
                )}
            </Row>
        </div>
    )
}

export default Cards