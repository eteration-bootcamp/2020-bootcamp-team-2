import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import ActivityView from './ActivityView';
import { getActivities } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
    const [activityPage, setActivityPage] = useState({ content: [] })
    const history = useHistory();
    useEffect(() => {

        loadActivities();

    }, []);

    const loadActivities = async (page) => {

        try {
            const response = await getActivities(page);
            console.log(response)
            setActivityPage({
                content: [...response.data.content]
            })
        } catch (error) { }
    }
    const { content } = activityPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.filter(item => history.location.state.activityId === item.id).map(activity => {

                        return <ActivityView key={activity.id} activity={activity} />

                    }
                    )}
            </Row>
        </div>
    )
}


export default Cards