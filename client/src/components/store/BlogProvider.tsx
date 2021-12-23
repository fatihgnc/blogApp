import React from 'react';
import { BlogCrudServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { Token } from '../../proto/blogService_pb';
import { getTokenFromLS } from './UserProvider';

type BlogContextObj = {
  fetchBlogs: () => Promise<any>;
};

const token = new Token();
const authToken = getTokenFromLS();
token.setAuthtoken(authToken as string);

const client = new BlogCrudServiceClient('http://localhost:8080');

export const BlogContext = React.createContext<BlogContextObj>({
  fetchBlogs: async () => {},
});

const BlogContextProvider: React.FC = (props) => {
  const fetchBlogs = async () => {
    try {
      const response = await client.fetchBlogs(token, null);
      return response.toObject();
    } catch (error) {
      throw error;
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
