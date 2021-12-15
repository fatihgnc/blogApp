import React, { useState } from 'react';
import User from '../../models/user';
import { UserServiceClient } from '../../proto/BlogServiceServiceClientPb';
import { UserInfo } from '../../proto/blogService_pb';

const client = new UserServiceClient('http://localhost:8080');

type UserContextObj = {
  isAuth: boolean;
  user: User | null;
  signUserInOrUp: (
    method: 'SUP' | 'SIN',
    username: string,
    password: string
  ) => void;
};

export const UserContext = React.createContext<UserContextObj>({
  isAuth: false,
  user: null,
  signUserInOrUp: () => {},
});

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User>();
  const [isAuth, setIsAuth] = useState<boolean>(false);

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
          return console.log(errMessage);
        }

        setUser(user as unknown as User);
        setIsAuth(true);
        localStorage.setItem('authToken', user?.authtoken as string);
      });
      return;
    }

    client.signUserUp(signInOrUpReq, null, (err, res) => {
      if (err) return console.log(err);

      const { errormessage: errMessage, user } = res.toObject();

      if (errMessage.length > 0) {
        return console.log(errMessage);
      }

      setUser(user as unknown as User);
      setIsAuth(true);
      localStorage.setItem('authToken', user?.authtoken as string);
    });
  };

  const contextValue: UserContextObj = {
    user: user as User,
    isAuth,
    signUserInOrUp: signInAndUpHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
