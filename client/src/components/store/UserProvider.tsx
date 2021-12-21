import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/user';
import { UserServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { UserInfo } from '../../proto/blogService_pb';

const client = new UserServiceClient('http://localhost:8080');

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

export const UserContext = React.createContext<UserContextObj>({
  isAuth: false,
  authToken: '',
  user: null,
  signUserInOrUp: () => {},
  logUserOut: () => {},
});

const UserContextProvider: React.FC = (props) => {
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);
  const [user, setUser] = useState<User>();
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

        const { errormessage: errMessage, user } = res.toObject();

        if (errMessage.length > 0) {
          console.log(errMessage);
          return navigate('auth?q=login');
        }

        setUser(user as unknown as User);
        localStorage.setItem('authToken', user?.username as string);
        setIsAuth(authToken !== '' ? true : false);
        navigate('/');
        console.log(user);
      });
      return;
    }

    client.signUserUp(signInOrUpReq, null, (err, res) => {
      if (err) return console.log(err);

      const { errormessage: errMessage, user } = res.toObject();

      if (errMessage.length > 0) {
        console.log(errMessage);
        return navigate('auth?q=login');
      }

      setUser(user as unknown as User);
      localStorage.setItem('authToken', user?.username as string);
      setIsAuth(authToken !== '' ? true : false);
      navigate('/');
      console.log(user);
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
