import grpc from '@grpc/grpc-js';
import { UserModel } from '../db/mongoose';
import { UserInfo__Output } from '../proto/blogApp/UserInfo';
import { SignInAndUpResponse } from '../proto/blogApp/SignInAndUpResponse';
import { signJWT } from './jwt';

export async function signUserUp(
  call: grpc.ServerUnaryCall<UserInfo__Output, SignInAndUpResponse>
): Promise<{ err: string | null; token: string | null }> {
  const { username, password } = call.request;

  if (!username || !password)
    return { err: 'both username and password are required!', token: null };

  const userInDb = await UserModel.findOne({ username }).exec();

  if (userInDb) return { err: 'username is in use!', token: null };

  const user = new UserModel({ username, password });

  const { blogCount, _id } = user;

  const authToken = signJWT({
    _id: _id.toString(),
    username,
    password,
    blogCount,
  });
  user.authToken = authToken;

  try {
    await user.save();

    return { err: null, token: authToken };
  } catch (err) {
    return { err, token: null };
  }
}

export async function signUserIn(
  call: grpc.ServerUnaryCall<UserInfo__Output, SignInAndUpResponse>
): Promise<{ err: string | null; token: string | null }> {
  const { username, password } = call.request;

  if (!username || !password)
    return { err: 'both username and password are required!', token: null };

  try {
    const user = await UserModel.findOne({ username }).exec();

    if (!user) return { err: 'no such user with this username!', token: null };

    if (user.password !== password)
      return { err: 'credentials are incorrect', token: null };

    const { blogCount, _id } = user;

    const authToken = signJWT({
      _id: _id.toString(),
      username,
      password,
      blogCount,
    });

    return { err: null, token: authToken };
  } catch (err) {
    return { err, token: null };
  }
}
