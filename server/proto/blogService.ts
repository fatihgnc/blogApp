import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BlogCrudServiceClient as _blogApp_BlogCrudServiceClient, BlogCrudServiceDefinition as _blogApp_BlogCrudServiceDefinition } from './blogApp/BlogCrudService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  blogApp: {
    Blog: MessageTypeDefinition
    BlogCrudService: SubtypeConstructor<typeof grpc.Client, _blogApp_BlogCrudServiceClient> & { service: _blogApp_BlogCrudServiceDefinition }
    BlogInsertionStatus: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

