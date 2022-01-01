import { User } from '../../models/user';
import { UserAction, UserState } from '../reducer-types/types';
import jwt from 'jsonwebtoken';
import { RpcError } from 'grpc-web';

const saveTokenInLS = (token: string) =>
    localStorage.setItem('authToken', token);
const removeTokenFromLS = () => localStorage.removeItem('authToken');
export const getTokenFromLS = () => localStorage.getItem('authToken');

export const handleSignInAndUp = (state: UserState, action: UserAction) => {
    const token = action.payload?.token as string;
    const user = jwt.decode(token) as User;
    saveTokenInLS(token);
    return {
        currentUser: user,
        token,
        isAuth: true,
        authError: null,
    };
};

export const handleLogout = (state: UserState, action: UserAction) => {
    removeTokenFromLS();
    const errMessage = action.payload?.errMessage as unknown as RpcError;
    const newState = {
        currentUser: null,
        token: null,
        isAuth: false,
    };
    if (errMessage) {
        return {
            ...newState,
            authError: errMessage,
        };
    }
    return {
        ...newState,
        authError: null,
    };
};
