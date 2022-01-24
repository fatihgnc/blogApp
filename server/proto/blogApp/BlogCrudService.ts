// Original file: blogService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Blogs as _blogApp_Blogs, Blogs__Output as _blogApp_Blogs__Output } from '../blogApp/Blogs';
import type { InsertBlogRequest as _blogApp_InsertBlogRequest, InsertBlogRequest__Output as _blogApp_InsertBlogRequest__Output } from '../blogApp/InsertBlogRequest';
import type { Token as _blogApp_Token, Token__Output as _blogApp_Token__Output } from '../blogApp/Token';

export interface BlogCrudServiceClient extends grpc.Client {
  CreateBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  
  FetchBlogs(argument: _blogApp_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  FetchBlogs(argument: _blogApp_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  FetchBlogs(argument: _blogApp_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  FetchBlogs(argument: _blogApp_Token, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  fetchBlogs(argument: _blogApp_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  fetchBlogs(argument: _blogApp_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  fetchBlogs(argument: _blogApp_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  fetchBlogs(argument: _blogApp_Token, callback: grpc.requestCallback<_blogApp_Blogs__Output>): grpc.ClientUnaryCall;
  
}

export interface BlogCrudServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateBlog: grpc.handleUnaryCall<_blogApp_InsertBlogRequest__Output, _blogApp_Blogs>;
  
  FetchBlogs: grpc.handleUnaryCall<_blogApp_Token__Output, _blogApp_Blogs>;
  
}

export interface BlogCrudServiceDefinition extends grpc.ServiceDefinition {
  CreateBlog: MethodDefinition<_blogApp_InsertBlogRequest, _blogApp_Blogs, _blogApp_InsertBlogRequest__Output, _blogApp_Blogs__Output>
  FetchBlogs: MethodDefinition<_blogApp_Token, _blogApp_Blogs, _blogApp_Token__Output, _blogApp_Blogs__Output>
}
