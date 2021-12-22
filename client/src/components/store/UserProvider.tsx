import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/user';
import { UserServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { UserInfo } from '../../proto/blogService_pb';
import jwt from 'jsonwebtoken';

type UserContextObj = {
  isAuth: boolean;
  authToken: string | null;
  user: User | null;
  signUserInOrUp: (
    method: 'SUP' | 'SIN',
    username: string,
    password: string
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
const getTokenFromLS = () => localStorage.getItem('authToken');

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

  console.log(isAuth);

  const signInAndUpHandler = (
    method: 'SUP' | 'SIN',
    username: string,
    password: string
  ) => {
    const signInOrUpReq = new UserInfo();

    signInOrUpReq.setUsername(username);
    signInOrUpReq.setPassword(password);

    if (method === 'SIN') {
      client.signUserIn(signInOrUpReq, null, (err, res) => {
        if (err) return console.log(err);

        const { errormessage: errMessage, authtoken: jwtToken } =
          res.toObject();

        if (errMessage) return console.log(errMessage);

        const payload = jwt.verify(jwtToken, 'mykey');
        console.log(payload);

        setTokenInLS(jwtToken);
        setUser(user as User);
        setIsAuth(true);

        navigate('/');
      });
    } else {
      client.signUserUp(signInOrUpReq, null, (err, res) => {
        if (err) return console.log(err);

        const { errormessage: errMessage, authtoken: jwtToken } =
          res.toObject();

        if (errMessage.trim().length > 0) return console.log(errMessage);

        const payload = jwt.verify(jwtToken, 'mykey');
        console.log(payload);

        setTokenInLS(jwtToken);
        setUser(payload as User);
        setIsAuth(true);

        navigate('/');
      });
    }
  };

  const logoutHandler = () => {
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
