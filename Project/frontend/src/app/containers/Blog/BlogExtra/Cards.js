import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import BlogView from './BlogView';
import { getBlogs } from '../../../../api/apiCalls';
import { useHistory } from 'react-router-dom';

const Cards = (props) => {
    const [blogPage, setBlogPage] = useState({ content: [] })
    const history = useHistory();
    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async (page) => {
        try {
            const response = await getBlogs(page);
            console.log(response)
            setBlogPage({
                content: [...response.data.content]
            })
        }
        catch (error) { }
    }
    const { content } = blogPage;

    return (
        <div className="container-fluid">
            <Row>
                {content.filter(item => history.location.state.blogId === item.id).map(blog => {
                    return <BlogView key={blog.id} blog={blog} />
                }
                )}
            </Row>
        </div>
    )
}


export default Cards