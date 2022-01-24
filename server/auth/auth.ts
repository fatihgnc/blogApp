import grpc from '@grpc/grpc-js';
import { UserModel } from '../db/mongoose';
import { UserInfo__Output } from '../proto/blogApp/UserInfo';
import { SignInAndUpResponse } from '../proto/blogApp/SignInAndUpResponse';
import jwt, { verify } from 'jsonwebtoken';

type jwtUser = {
    _id: string;
    username: string;
    password: string;
    blogCount: number;
    iat?: number;
    exp?: number;
};

export async function signUserUp(
    call: grpc.ServerUnaryCall<UserInfo__Output, SignInAndUpResponse>
): Promise<{ err: string | null; token: string | null }> {
    // get the username,request and check if they are set
    const { username, password } = call.request;

    if (!username || !password)
        return { err: 'both username and password are required!', token: null };

    // check to see if user with this username exists in db
    const userInDb = await UserModel.findOne({ username }).exec();

    if (userInDb) return { err: 'username is in use!', token: null };

    // create the new user, create the jwt
    const user = new UserModel({ username, password });
    console.log(user);
    const { blogCount, _id } = user;

    const authToken = jwt.sign(
        {
            _id,
            username,
            password,
            blogCount,
        },
        'mykey',
        { expiresIn: '10m' }
    );

    try {
        // save user to db
        await user.save();

        return { err: null, token: authToken };
    } catch (err) {
        return { err, token: null };
    }
}

export async function signUserIn(
    call: grpc.ServerUnaryCall<UserInfo__Output, SignInAndUpResponse>
): Promise<{ err: string | null; token: string | null }> {
    // get the data and validate it (check if null)
    const { username, password } = call.request;

    if (!username || !password)
        return { err: 'both username and password are required!', token: null };

    try {
        // query the user with the given username and check if it exists
        const user = await UserModel.findOne({ username }).exec();

        if (!user)
            return { err: 'no such user with this username!', token: null };

        // user exists and we check if passwords match
        if (user.password !== password)
            return { err: 'credentials are incorrect', token: null };

        // credentials are valid now get the info from the user and sign the jwt and return it
        const { blogCount, _id } = user;

        const authToken = jwt.sign(
            {
                _id,
                username,
                password,
                blogCount,
            },
            'mykey',
            { expiresIn: '10m' }
        );

        await user.save();

        return { err: null, token: authToken };
    } catch (err) {
        return { err, token: null };
    }
}

export async function getUserFromToken(token: string) {
    // get the user payload from token and extract the id
    try {
        const userPayload = verifyToken(token) as jwtUser;
        const { _id } = userPayload;

        // query the user with id
        const user = await UserModel.findById(_id).exec();
        return user;
    } catch (error) {
        throw error;
    }
}

export function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, 'mykey');
        return decoded;
    } catch (error) {
        throw error;
    }
}
