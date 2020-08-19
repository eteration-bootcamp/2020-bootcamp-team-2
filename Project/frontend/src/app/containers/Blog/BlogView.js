import React from 'react';
import { CardDeck, Container, Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogView = (props) => {
    const { blog } = props;
    return (    
        <Col md={3}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={blog.imageUrl} />
                    <Card.ImgOverlay>
                    <Card.Title className="navbar_text_color">{blog.blogName}</Card.Title>
                    <Link to="/BlogExtra"><Button className="card_button navbar_text_color" variant="primary">See and Enjoy</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>     
    )
};

export default BlogView;