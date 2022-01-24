import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { BlogCrudServiceHandlers } from './proto/blogApp/BlogCrudService';
import { UserServiceHandlers } from './proto/blogApp/UserService';
import { ProtoGrpcType } from './proto/blogService';
import { BlogModel, connectMongo } from './db/mongoose';
import {
    signUserIn,
    signUserUp,
    getUserFromToken,
    verifyToken,
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
    CreateBlog: async (call, res) => {
        const { authToken, blogTitle, blogContent, authorId } = call.request;
        console.log('received call', authToken);

        if (!authToken) {
            return res({ code: 401, message: 'Token is required!' });
        }

        if (!blogTitle || !blogContent) {
            return res({
                code: 400,
                message: 'Blog title and blog content is required!',
            });
        }

        if (!authorId) {
            return res({ code: 401, message: 'You are not authenticated!' });
        }

        const blog = new BlogModel({ blogContent, blogTitle, authorId });
        let blogs;
        try {
            await blog.save();
            blogs = await BlogModel.find({ authorId }).exec();
        } catch (error) {
            return res({ code: 500, message: error.message });
        }

        try {
            verifyToken(authToken);
            res(null, { blogs });
        } catch (error) {
            res({ code: 401, message: error.message });
        }
    },
    FetchBlogs: async (call, res) => {
        console.log('received fetch blogs call!!!');
        const { authToken } = call.request;

        if (!authToken || authToken.length === 0)
            return res({ code: 400, message: 'auth token is required!' });

        try {
            const { _id, username } = await getUserFromToken(authToken);
            console.log(username);
            const blogs = (await BlogModel.find({ authorId: _id }).exec()).map(
                (blog) => ({
                    blogTitle: blog.blogTitle,
                    blogContent: blog.blogContent,
                    authorUsername: username,
                })
            );

            res(null, { blogs });
        } catch (error) {
            console.log('Caught error in fetch blogs handler!');
            res({
                code: 401,
                message: error.message,
            });
        }
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
    // LogUserOut: async (call, res) => {
    //     console.log('received the logout call');
    //     const { authToken } = call.request;
    //     if (!authToken) return;
    //     try {
    //         await logUserOut(authToken);
    //         res(null);
    //     } catch (error) {
    //         res({ code: 400, name: error.name });
    //     }
    // },
} as UserServiceHandlers);
