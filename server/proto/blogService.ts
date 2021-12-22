import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BlogCrudServiceClient as _blogApp_BlogCrudServiceClient, BlogCrudServiceDefinition as _blogApp_BlogCrudServiceDefinition } from './blogApp/BlogCrudService';
import type { UserServiceClient as _blogApp_UserServiceClient, UserServiceDefinition as _blogApp_UserServiceDefinition } from './blogApp/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  blogApp: {
    BlogCrudService: SubtypeConstructor<typeof grpc.Client, _blogApp_BlogCrudServiceClient> & { service: _blogApp_BlogCrudServiceDefinition }
    InsertBlogRequest: MessageTypeDefinition
    InsertBlogResponse: MessageTypeDefinition
    SignInAndUpResponse: MessageTypeDefinition
    Token: MessageTypeDefinition
    UserInfo: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _blogApp_UserServiceClient> & { service: _blogApp_UserServiceDefinition }
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
}

