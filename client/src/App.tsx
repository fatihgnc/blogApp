import React from 'react';
import Router from './components/Router';
import UserContextProvider from './components/store/UserProvider';
import './index.css';
// import { BlogCrudServiceClient } from './proto/BlogServiceServiceClientPb';
// import { InsertBlogRequest } from './proto/blogService_pb';
// import * as timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
