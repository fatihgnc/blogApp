import jwt from 'jsonwebtoken';

export type jwtUser = {
  _id: string;
  username: string;
  password: string;
  blogCount: number;
  iat?: number;
  exp?: number;
};

export function signJWT(data: jwtUser) {
  return jwt.sign({ ...data }, 'mykey', { expiresIn: '1h' });
}

export function verifyJWT(authToken: string) {
  return jwt.verify(authToken, 'mykey');
}
