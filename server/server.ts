import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { UserServiceHandlers } from './proto/blogApp/UserService';
import { ProtoGrpcType } from './proto/blogService';

const PROTO_PATH = './blogService.proto';
const PORT = 8082;

const packageDef = loader.loadSync(PROTO_PATH, {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const blogService = grpcObj.blogApp.BlogCrudService;
const userService = grpcObj.blogApp.UserService;

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
    res(null, { isSuccessful: true });
  },
} as BlogCrudServiceHandlers);

server.addService(userService.service, {
  SignUserUp: (call, res) => {
    console.log('received the call!');
    return res(null, {
      user: {
        username: call.request.username,
        password: call.request.password,
      },
    });
  },
} as UserServiceHandlers);
