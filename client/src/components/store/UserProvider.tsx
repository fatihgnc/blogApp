import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../models/user';
import { UserServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { Token, UserInfo } from '../../proto/blogService_pb';
import jwt from 'jsonwebtoken';

type UserContextObj = {
  isAuth: boolean;
  authToken: string | null;
  user: User | null;
  signUserInOrUp: (
    method: 'SUP' | 'SIN',
    username: string,
    password: string,
    cb: (errMessage?: string) => void
  ) => void;
  logUserOut: (authToken: string) => void;
};

const client = new UserServiceClient('http://localhost:8080');

export const UserContext = React.createContext<UserContextObj>({
  isAuth: false,
  authToken: '',
  user: null,
  signUserInOrUp: () => {},
  logUserOut: () => {},
});

const removeTokenFromLS = () => localStorage.removeItem('authToken');
const setTokenInLS = (token: string) =>
  localStorage.setItem('authToken', token);
export const getTokenFromLS = () => localStorage.getItem('authToken');

const UserContextProvider: React.FC = (props) => {
  const authToken = getTokenFromLS();

  const [user, setUser] = useState<User | null>();
  const [isAuth, setIsAuth] = useState<boolean>(authToken ? true : false);

  useEffect(() => {
    if (authToken) {
      jwt.verify(authToken as string, 'mykey', (err, userPayload) => {
        if (err) {
          removeTokenFromLS();
          return console.log(err);
        }

        setUser(userPayload as User);
      });
    }
  }, [authToken]);

  const navigate = useNavigate();

  // console.log(isAuth);

  const signInAndUpHandler = (
    method: 'SUP' | 'SIN',
    username: string,
    password: string,
    cb: (errMessage?: string) => void
  ): string | void => {
    const signInOrUpReq = new UserInfo();

    signInOrUpReq.setUsername(username);
    signInOrUpReq.setPassword(password);

    if (method === 'SIN') {
      client.signUserIn(signInOrUpReq, null, (err, res) => {
        if (err) return console.log(err);

        const { errormessage: errMessage, authtoken: jwtToken } =
          res.toObject();

        if (errMessage.trim().length > 0) return cb(errMessage);

        const payload = jwt.verify(jwtToken, 'mykey');

        setTokenInLS(jwtToken);
        setUser(payload as User);
        setIsAuth(true);

        navigate('/');
      });
    } else {
      client.signUserUp(signInOrUpReq, null, (err, res) => {
        if (err) return console.log(err);

        const { errormessage: errMessage, authtoken: jwtToken } =
          res.toObject();

        if (errMessage.trim().length > 0) return cb(errMessage);

        const payload = jwt.verify(jwtToken, 'mykey');

        setTokenInLS(jwtToken);
        setUser(payload as User);
        setIsAuth(true);

        navigate('/');
      });
    }
  };

  const logoutHandler = () => {
    // create request
    const token = new Token();
    token.setAuthtoken(authToken as string);

    // send request
    client.logUserOut(token, null, (err, res) =>
      err ? console.log(err) : null
    );

    removeTokenFromLS();
    setIsAuth(false);

    return navigate('auth?q=login');
  };

  const contextValue: UserContextObj = {
    user: user as User,
    authToken,
    isAuth,
    signUserInOrUp: signInAndUpHandler,
    logUserOut: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
