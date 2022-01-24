/**
 * @fileoverview gRPC-Web generated client stub for blogApp
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as blogService_pb from './blogService_pb';


export class BlogCrudServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoFetchBlogs = new grpcWeb.MethodDescriptor(
    '/blogApp.BlogCrudService/FetchBlogs',
    grpcWeb.MethodType.UNARY,
    blogService_pb.Token,
    blogService_pb.Blogs,
    (request: blogService_pb.Token) => {
      return request.serializeBinary();
    },
    blogService_pb.Blogs.deserializeBinary
  );

  fetchBlogs(
    request: blogService_pb.Token,
    metadata: grpcWeb.Metadata | null): Promise<blogService_pb.Blogs>;

  fetchBlogs(
    request: blogService_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: blogService_pb.Blogs) => void): grpcWeb.ClientReadableStream<blogService_pb.Blogs>;

  fetchBlogs(
    request: blogService_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: blogService_pb.Blogs) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blogApp.BlogCrudService/FetchBlogs',
        request,
        metadata || {},
        this.methodInfoFetchBlogs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blogApp.BlogCrudService/FetchBlogs',
    request,
    metadata || {},
    this.methodInfoFetchBlogs);
  }

  methodInfoCreateBlog = new grpcWeb.MethodDescriptor(
    '/blogApp.BlogCrudService/CreateBlog',
    grpcWeb.MethodType.UNARY,
    blogService_pb.InsertBlogRequest,
    blogService_pb.Blogs,
    (request: blogService_pb.InsertBlogRequest) => {
      return request.serializeBinary();
    },
    blogService_pb.Blogs.deserializeBinary
  );

  createBlog(
    request: blogService_pb.InsertBlogRequest,
    metadata: grpcWeb.Metadata | null): Promise<blogService_pb.Blogs>;

  createBlog(
    request: blogService_pb.InsertBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: blogService_pb.Blogs) => void): grpcWeb.ClientReadableStream<blogService_pb.Blogs>;

  createBlog(
    request: blogService_pb.InsertBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: blogService_pb.Blogs) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blogApp.BlogCrudService/CreateBlog',
        request,
        metadata || {},
        this.methodInfoCreateBlog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blogApp.BlogCrudService/CreateBlog',
    request,
    metadata || {},
    this.methodInfoCreateBlog);
  }

}

export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSignUserIn = new grpcWeb.MethodDescriptor(
    '/blogApp.UserService/SignUserIn',
    grpcWeb.MethodType.UNARY,
    blogService_pb.UserInfo,
    blogService_pb.SignInAndUpResponse,
    (request: blogService_pb.UserInfo) => {
      return request.serializeBinary();
    },
    blogService_pb.SignInAndUpResponse.deserializeBinary
  );

  signUserIn(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null): Promise<blogService_pb.SignInAndUpResponse>;

  signUserIn(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: blogService_pb.SignInAndUpResponse) => void): grpcWeb.ClientReadableStream<blogService_pb.SignInAndUpResponse>;

  signUserIn(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: blogService_pb.SignInAndUpResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blogApp.UserService/SignUserIn',
        request,
        metadata || {},
        this.methodInfoSignUserIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blogApp.UserService/SignUserIn',
    request,
    metadata || {},
    this.methodInfoSignUserIn);
  }

  methodInfoSignUserUp = new grpcWeb.MethodDescriptor(
    '/blogApp.UserService/SignUserUp',
    grpcWeb.MethodType.UNARY,
    blogService_pb.UserInfo,
    blogService_pb.SignInAndUpResponse,
    (request: blogService_pb.UserInfo) => {
      return request.serializeBinary();
    },
    blogService_pb.SignInAndUpResponse.deserializeBinary
  );

  signUserUp(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null): Promise<blogService_pb.SignInAndUpResponse>;

  signUserUp(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: blogService_pb.SignInAndUpResponse) => void): grpcWeb.ClientReadableStream<blogService_pb.SignInAndUpResponse>;

  signUserUp(
    request: blogService_pb.UserInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: blogService_pb.SignInAndUpResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blogApp.UserService/SignUserUp',
        request,
        metadata || {},
        this.methodInfoSignUserUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blogApp.UserService/SignUserUp',
    request,
    metadata || {},
    this.methodInfoSignUserUp);
  }

}

