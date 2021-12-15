// Original file: blogService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { InsertBlogRequest as _blogApp_InsertBlogRequest, InsertBlogRequest__Output as _blogApp_InsertBlogRequest__Output } from '../blogApp/InsertBlogRequest';
import type { InsertBlogResponse as _blogApp_InsertBlogResponse, InsertBlogResponse__Output as _blogApp_InsertBlogResponse__Output } from '../blogApp/InsertBlogResponse';

export interface BlogCrudServiceClient extends grpc.Client {
  CreateBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_InsertBlogRequest, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_InsertBlogRequest, callback: grpc.requestCallback<_blogApp_InsertBlogResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface BlogCrudServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateBlog: grpc.handleUnaryCall<_blogApp_InsertBlogRequest__Output, _blogApp_InsertBlogResponse>;
  
}

export interface BlogCrudServiceDefinition extends grpc.ServiceDefinition {
  CreateBlog: MethodDefinition<_blogApp_InsertBlogRequest, _blogApp_InsertBlogResponse, _blogApp_InsertBlogRequest__Output, _blogApp_InsertBlogResponse__Output>
}
