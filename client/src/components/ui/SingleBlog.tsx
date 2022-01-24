import React from 'react';

const SingleBlog: React.FC<{
    blogContent: string;
    blogTitle: string;
    blogAuthor: string;
}> = (props) => {
    console.log(props);
    return (
        <div style={{ boxShadow: '0px 0px 5px 1px #000', padding: '30px' }}>
            <h1>{props.blogTitle}</h1>
            <p style={{ wordBreak: 'normal' }}>{props.blogContent}</p>
            <small>{props.blogAuthor}</small>
        </div>
    );
};

export default SingleBlog;
