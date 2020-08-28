import React, { useState, useEffect } from 'react';
import ActivityView from './ActivityView';
import { getActivities } from '../../../../api/apiCalls';
import { Container, Row } from 'react-bootstrap'
import Header from "./Header";

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
    <Container fluid className="margin_bottom_20">
      <Header />
      <Row>
        {content.map(activity => {
          return (<ActivityView key={activity.id} activity={activity} />)
        })}
      </Row>
    </Container>
  )
}

export default Cards