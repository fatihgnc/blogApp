import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { UserServiceHandlers } from './proto/blogApp/UserService';
import { ProtoGrpcType } from './proto/blogService';
import { connectMongo, Blog, User } from './db/mongoose';

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

    const { username, password } = call.request;

    if (!username || !password) {
      return res(null, {
        errorMessage: 'both username and password are required!',
      });
    }

    const user = new User({ username, password });

    try {
      const savedUser = await user.save();

      return res(null, {
        user: {
          id: savedUser._id.toString(),
          username,
          password,
          authToken: '143t89gvaus98gau89q',
        },
      });
    } catch (error) {
      return res(null, { errorMessage: error });
    }
  },
  SignUserIn: (call, res) => {},
} as UserServiceHandlers);
