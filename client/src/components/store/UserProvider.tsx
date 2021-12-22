import React, { useState } from 'react';
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

const UserContextProvider: React.FC = (props) => {
  const authToken = localStorage.getItem('authToken');
  const userPayload = jwt.verify(authToken as string, 'mykey');

  const [user, setUser] = useState<User | null>(userPayload as unknown as User);
  const [isAuth, setIsAuth] = useState<boolean>(authToken ? true : false);

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

        if (errMessage) {
          console.log(errMessage);
          return navigate('auth?q=login');
        }

        setUser(user as User);
        localStorage.setItem('authToken', jwtToken);
        setIsAuth(true);
        navigate('/');
        console.log(user);
      });
      return;
    }

    client.signUserUp(signInOrUpReq, null, (err, res) => {
      if (err) return console.log(err);

      const { errormessage: errMessage, authtoken: jwtToken } = res.toObject();

      if (errMessage.trim().length > 0) return navigate('auth?q=register');

      const payload = jwt.verify(jwtToken, 'mykey');
      console.log(payload);

      setUser(payload as User);
      localStorage.setItem('authToken', jwtToken);
      setIsAuth(true);
      console.log(user);
      navigate('/');
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
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
