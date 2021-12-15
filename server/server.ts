import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { ProtoGrpcType } from './proto/blogService';

const PROTO_PATH = './blogService.proto';
const PORT = 8082;

const packageDef = loader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const blogService = grpcObj.blogApp.BlogCrudService;

const server = new grpc.Server();

server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    console.log(`server up on port ${port}`);
    server.start();
  }
);

server.addService(blogService.service, {
  CreateBlog(call, res) {
    console.log('received call', call.request);
    res(null, { isAdded: true });
  },
} as BlogCrudServiceHandlers);
