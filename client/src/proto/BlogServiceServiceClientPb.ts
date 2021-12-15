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

  methodInfoCreateBlog = new grpcWeb.MethodDescriptor(
    '/blogApp.BlogCrudService/CreateBlog',
    grpcWeb.MethodType.UNARY,
    blogService_pb.Blog,
    blogService_pb.BlogInsertionStatus,
    (request: blogService_pb.Blog) => {
      return request.serializeBinary();
    },
    blogService_pb.BlogInsertionStatus.deserializeBinary
  );

  createBlog(
    request: blogService_pb.Blog,
    metadata: grpcWeb.Metadata | null): Promise<blogService_pb.BlogInsertionStatus>;

  createBlog(
    request: blogService_pb.Blog,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: blogService_pb.BlogInsertionStatus) => void): grpcWeb.ClientReadableStream<blogService_pb.BlogInsertionStatus>;

  createBlog(
    request: blogService_pb.Blog,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: blogService_pb.BlogInsertionStatus) => void) {
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

