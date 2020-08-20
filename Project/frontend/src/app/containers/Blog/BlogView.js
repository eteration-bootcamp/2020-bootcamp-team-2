import React from 'react';
import { CardDeck, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogView = (props) => {
    const { blog } = props;
    return (    
        <Col md={3} style={{ marginBottom : "20px"}}>
            <CardDeck className="margin_top_20">
                <Card className="text-white text-right">
                    <Card.Img className="card_img_height" src={blog.imageUrl} />
                    <Card.ImgOverlay>
                    <Card.Title className="navbar_text_color">{blog.blogName}</Card.Title>
                    <Link to={{pathname:`/BlogExtra/${blog.id}`,state:{blogId : blog.id}}}  className="card_button">See and Enjoy</Link>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Col>     
    )
};

export default BlogView;