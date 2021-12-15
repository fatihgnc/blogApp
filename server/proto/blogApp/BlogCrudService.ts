// Original file: blogService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Blog as _blogApp_Blog, Blog__Output as _blogApp_Blog__Output } from '../blogApp/Blog';
import type { BlogInsertionStatus as _blogApp_BlogInsertionStatus, BlogInsertionStatus__Output as _blogApp_BlogInsertionStatus__Output } from '../blogApp/BlogInsertionStatus';

export interface BlogCrudServiceClient extends grpc.Client {
  CreateBlog(argument: _blogApp_Blog, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_Blog, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_Blog, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  CreateBlog(argument: _blogApp_Blog, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_Blog, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_Blog, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_Blog, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  createBlog(argument: _blogApp_Blog, callback: grpc.requestCallback<_blogApp_BlogInsertionStatus__Output>): grpc.ClientUnaryCall;
  
}

export interface BlogCrudServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateBlog: grpc.handleUnaryCall<_blogApp_Blog__Output, _blogApp_BlogInsertionStatus>;
  
}

export interface BlogCrudServiceDefinition extends grpc.ServiceDefinition {
  CreateBlog: MethodDefinition<_blogApp_Blog, _blogApp_BlogInsertionStatus, _blogApp_Blog__Output, _blogApp_BlogInsertionStatus__Output>
}
