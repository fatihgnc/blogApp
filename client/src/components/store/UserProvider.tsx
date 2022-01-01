import React, { Reducer, useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';
import { User } from '../../models/user';
import { UserServiceClient } from '../../proto/BlogServiceServiceClientPb';
import jwt from 'jsonwebtoken';
import { UserAction, UserActionTypes, UserState } from '../reducer-types/types';
import {
    getTokenFromLS,
    handleLogout,
    handleSignInAndUp,
} from '../reducer-actions/actions';
import { RpcError } from 'grpc-web';
// import { RpcError } from 'grpc-web';

const client = new UserServiceClient('http://localhost:8080');

type UserContextObj = {
    isAuth: boolean;
    user: User | null;
    token: string | null;
    client: UserServiceClient;
    authError: RpcError | null;
    signIn: (token: string) => void;
    signUp: (token: string) => void;
    logOut: (errMessage?: string) => void;
};

export const UserContext = React.createContext<UserContextObj>({
    isAuth: false,
    user: null,
    token: null,
    client,
    authError: null,
    signIn: () => {},
    signUp: () => {},
    logOut: () => {},
});

const initialState: UserState = {
    isAuth: false,
    currentUser: null,
    token: null,
    authError: null,
};

const authToken = getTokenFromLS() as string;

if (authToken) {
    const user = jwt.decode(authToken) as User;
    initialState.currentUser = user;
    initialState.isAuth = true;
    initialState.token = authToken;
    initialState.authError = null;
}

const reducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'USER_SIGN_IN':
            return handleSignInAndUp(state, action);
        case 'USER_SIGN_UP':
            return handleSignInAndUp(state, action);
        case 'USER_LOG_OUT':
            return handleLogout(state, action);
        default:
            return state;
    }
};

const UserContextProvider: React.FC = (props) => {
    const [state, dispatch] = useReducer<Reducer<UserState, UserAction>>(
        reducer,
        initialState
    );

    const signInHandler = (token: string) => {
        dispatch({
            type: UserActionTypes.USER_SIGN_IN,
            payload: { token },
        });
    };

    const signUpHandler = (token: string) =>
        dispatch({
            type: UserActionTypes.USER_SIGN_UP,
            payload: { token },
        });

    const logoutHandler = (errMessage?: string) =>
        dispatch({
            type: UserActionTypes.USER_LOG_OUT,
            payload: {
                errMessage,
            },
        });

    const contextValue: UserContextObj = {
        user: state.currentUser,
        isAuth: state.isAuth,
        token: state.token,
        authError: state.authError as RpcError,
        client,
        signIn: signInHandler,
        signUp: signUpHandler,
        logOut: logoutHandler,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
