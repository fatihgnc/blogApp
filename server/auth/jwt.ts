import jwt from 'jsonwebtoken';

type jwtUser = {
  _id: string;
  username: string;
  password: string;
  blogCount: number;
};

export function signJWT(data: jwtUser) {
  return jwt.sign({ ...data }, 'mykey', { expiresIn: '1h' });
}

export function verifyJWT(authToken: string) {
  return jwt.verify(authToken, 'mykey');
}