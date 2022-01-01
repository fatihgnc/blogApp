import React, { useContext } from 'react';
import { BlogCrudServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { Token } from '../../proto/blogService_pb';
import { UserContext } from '../store/UserProvider';

type BlogContextObj = {
    fetchBlogs: () => Promise<any>;
};

const fetchBlogsReq = new Token();

const client = new BlogCrudServiceClient('http://localhost:8080');

export const BlogContext = React.createContext<BlogContextObj>({
    fetchBlogs: async () => {},
});

const BlogContextProvider: React.FC = (props) => {
    const userCtx = useContext(UserContext);
    fetchBlogsReq.setAuthtoken(userCtx.token as string);

    const fetchBlogs = async () => {
        try {
            const response = await client.fetchBlogs(fetchBlogsReq, null);
            return response.toObject();
        } catch (error) {
            console.log(error);
            userCtx.logOut(error as string);
        }
    };

    const contextValue: BlogContextObj = {
        fetchBlogs,
    };

    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
