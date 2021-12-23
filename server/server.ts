import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { UserServiceHandlers } from './proto/blogApp/UserService';
import { ProtoGrpcType } from './proto/blogService';
import { BlogModel, connectMongo } from './db/mongoose';
import {
  signUserIn,
  signUserUp,
  logUserOut,
  getUserFromToken,
} from './auth/auth';
// import { User } from './proto/blogApp/User';

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
    if (err) return console.log(err);
    console.log(`server up on port ${port}`);
    server.start();
  }
);

server.addService(blogService.service, {
  CreateBlog: (call, res) => {
    console.log('received call', call.request);
    res(null, { isSuccessful: true });
  },
  FetchBlogs: async (call, res) => {
    console.log('received fetch blogs call!!!');

    const { authToken } = call.request;

    if (!authToken || authToken.length === 0)
      return res({ code: 400, message: 'auth token is required!' });

    const { _id, username } = await getUserFromToken(authToken);

    // const blogs = await BlogModel.find({ authorId: _id }).exec();
    // console.log(blogs);

    res(null, {
      blogs: [
        {
          authorUsername: username,
          blogContent: 'my blog content',
          blogTitle: 'my blog title',
        },
      ],
    });
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
  LogUserOut: async (call, res) => {
    console.log('received the logout call');
    const { authToken } = call.request;
    if (!authToken) return;
    await logUserOut(authToken);
    return res(null);
  },
} as UserServiceHandlers);
