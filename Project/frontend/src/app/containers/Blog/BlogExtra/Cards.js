import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import BlogView from './BlogView';
import { getBlogs } from '../../../../api/apiCalls';

const Cards = ({ onSelectBlogId }) => {
    const [blogPage, setBlogPage] = useState({ content: [] })

    useEffect(() => {

        loadBlogs();
    }, []);

    const loadBlogs = async (page) => {
        try {
            const response = await getBlogs(page);
            setBlogPage(previousBlogPage => ({
                ...response.data,
                content: [...previousBlogPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }
    const { content } = blogPage;

    return (

        <div className="container-fluid">
            <Row>
                {content.map(blog => {
                        return <BlogView onClick={ () => onSelectBlogId(blog.id)} key={blog.id} blog={blog} />                     
                    }
                )}
            </Row>
        </div>
    )
}


export default Cards