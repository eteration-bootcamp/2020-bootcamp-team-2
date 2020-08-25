import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'

const BlogView = (props) => {
    const { blog } = props;
    return (
        <Container fluid="md">
            <Row>
                <h2 className="location_header_style">{blog.blogName}</h2>
            </Row>
            <Row>
                <Col md={6} >
                    <Card class="" className="text-white text-right">
                        <Card.Img class="card_img_height" src={blog.imageUrl} />
                    </Card>
                </Col>
                <Col md={6} style={{ marginBottom: "200px" }}>
                    {blog.blogContent}
                </Col>
            </Row>
        </Container>
    )
};

export default BlogView;