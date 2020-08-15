import React from 'react';

const BlogView = (props) => {
    const { blog } = props;
    return (
        <div className="card p-2" style={{ marginTop: "10px" }}>
            {blog.blogComment}
        </div>
    )
};

export default BlogView;