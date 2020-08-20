import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import ActivityView from './ActivityView';
import { getActivities } from '../../../../api/apiCalls';

const Cards = () => {
    const [activityPage, setActivityPage] = useState({ content: [] })

    useEffect(() => {

        loadActivities();
    }, []);

    const loadActivities = async (page) => {
        try {
            const response = await getActivities(page);
            setActivityPage(previousActivityPage => ({
                ...response.data,
                content: [...previousActivityPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }
    const { content } = activityPage;

    return (

        <div className="container-fluid" style={{ marginBottom : "30px"}}>
            <Row>
                {content.map(activity => {
                    return ( <ActivityView key={activity.id} activity={activity} /> )
                })}
            </Row>
        </div>
    )
}


export default Cards