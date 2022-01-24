import React, { useContext } from 'react';
import { BlogCrudServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { InsertBlogRequest, Token } from '../../proto/blogService_pb';
import { UserContext } from '../store/UserProvider';

type BlogContextObj = {
    fetchBlogs: () => Promise<any>;
    createBlog: (
        blogTitle: string,
        blogContent: string,
        authorID: string
    ) => Promise<any>;
};

const client = new BlogCrudServiceClient('http://localhost:8080');

export const BlogContext = React.createContext<BlogContextObj>({
    fetchBlogs: async () => {},
    createBlog: async () => [],
});

const BlogContextProvider: React.FC = (props) => {
    const userCtx = useContext(UserContext);

    const fetchBlogs = async () => {
        const token = new Token();
        token.setAuthtoken(userCtx.token as string);
        try {
            const response = await client.fetchBlogs(token, null);
            return response.toObject();
        } catch (error) {
            console.log(error);
            userCtx.logOut(error as string);
        }
    };

    const createBlog = async (
        blogTitle: string,
        blogContent: string,
        authorId: string
    ) => {
        const createBlogReq = new InsertBlogRequest();

        createBlogReq.setAuthorid(authorId);
        createBlogReq.setBlogcontent(blogContent);
        createBlogReq.setBlogtitle(blogTitle);
        createBlogReq.setAuthtoken(userCtx.token as string);

        try {
            const blogs = (
                await client.createBlog(createBlogReq, null)
            ).toObject();
            return blogs.blogsList;
        } catch (error) {
            console.log(error);
        }
    };

    const contextValue: BlogContextObj = {
        fetchBlogs,
        createBlog,
    };

    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
