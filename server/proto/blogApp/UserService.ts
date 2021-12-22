// Original file: blogService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { SignInAndUpResponse as _blogApp_SignInAndUpResponse, SignInAndUpResponse__Output as _blogApp_SignInAndUpResponse__Output } from '../blogApp/SignInAndUpResponse';
import type { Token as _blogApp_Token, Token__Output as _blogApp_Token__Output } from '../blogApp/Token';
import type { UserInfo as _blogApp_UserInfo, UserInfo__Output as _blogApp_UserInfo__Output } from '../blogApp/UserInfo';

export interface UserServiceClient extends grpc.Client {
  LogUserOut(argument: _blogApp_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  LogUserOut(argument: _blogApp_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  LogUserOut(argument: _blogApp_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  LogUserOut(argument: _blogApp_Token, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logUserOut(argument: _blogApp_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logUserOut(argument: _blogApp_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logUserOut(argument: _blogApp_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logUserOut(argument: _blogApp_Token, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  SignUserIn(argument: _blogApp_UserInfo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _blogApp_UserInfo, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _blogApp_UserInfo, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _blogApp_UserInfo, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _blogApp_UserInfo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _blogApp_UserInfo, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _blogApp_UserInfo, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _blogApp_UserInfo, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  
  SignUserUp(argument: _blogApp_UserInfo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _blogApp_UserInfo, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _blogApp_UserInfo, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _blogApp_UserInfo, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _blogApp_UserInfo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _blogApp_UserInfo, metadata: grpc.Metadata, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _blogApp_UserInfo, options: grpc.CallOptions, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _blogApp_UserInfo, callback: grpc.requestCallback<_blogApp_SignInAndUpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  LogUserOut: grpc.handleUnaryCall<_blogApp_Token__Output, _google_protobuf_Empty>;
  
  SignUserIn: grpc.handleUnaryCall<_blogApp_UserInfo__Output, _blogApp_SignInAndUpResponse>;
  
  SignUserUp: grpc.handleUnaryCall<_blogApp_UserInfo__Output, _blogApp_SignInAndUpResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  LogUserOut: MethodDefinition<_blogApp_Token, _google_protobuf_Empty, _blogApp_Token__Output, _google_protobuf_Empty__Output>
  SignUserIn: MethodDefinition<_blogApp_UserInfo, _blogApp_SignInAndUpResponse, _blogApp_UserInfo__Output, _blogApp_SignInAndUpResponse__Output>
  SignUserUp: MethodDefinition<_blogApp_UserInfo, _blogApp_SignInAndUpResponse, _blogApp_UserInfo__Output, _blogApp_SignInAndUpResponse__Output>
}
