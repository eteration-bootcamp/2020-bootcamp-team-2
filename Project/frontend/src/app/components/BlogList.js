import React, { useState, useEffect } from 'react';
import { getBlogs } from '../../api/apiCalls';
import BlogView from './BlogView';

const BlogList = () => {
    const [blogPage, setBlogPage] = useState({ content: [], last: true, number: 0 })

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

    const { content, last, number } = blogPage;



    return (
        <div>
            {content.map(blog => {
                return <BlogView key={blog.id} blog={blog} />
            })}
            {!last && <div className="alert alert-secondary text-center" onClick={() => loadBlogs(number + 1)} style={{ cursor: 'pointer' }}>Load old blogs</div>}

        </div>
    );
};

export default BlogList;