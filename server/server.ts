import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { UserServiceHandlers } from './proto/blogApp/UserService';
import { ProtoGrpcType } from './proto/blogService';
import { connectMongo } from './db/mongoose';
import { signUserIn, signUserUp } from './auth/auth';
import { User } from './proto/blogApp/User';

const PROTO_PATH = './blogService.proto';
const PORT = 8082;

connectMongo()
  .then((_) => console.log('connected to mongodb'))
  .catch((err) => console.error(err));

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
  SignUserUp: async (call, res) => {
    console.log('received the signup call!');

    const retValue = await signUserUp(call);

    if (retValue.err) {
      return res(null, { errorMessage: JSON.stringify(retValue.err) });
    }

    // console.log(retValue);

    return res(null, { authToken: retValue.token });
  },
  SignUserIn: async (call, res) => {
    console.log('received the signin call!');

    const retValue = await signUserIn(call);

    if (retValue.err) {
      return res(null, { errorMessage: JSON.stringify(retValue.err) });
    }

    // console.log(retValue);

    return res(null, { authToken: retValue.token });
  },
} as UserServiceHandlers);
