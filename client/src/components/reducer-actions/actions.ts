import { User } from '../../models/user';
import { UserAction, UserState } from '../reducer-types/types';
import jwt from 'jsonwebtoken';

const saveTokenInLS = (token: string) =>
    localStorage.setItem('authToken', token);
const removeTokenFromLS = () => localStorage.removeItem('authToken');
export const getTokenFromLS = () => localStorage.getItem('authToken');

export const handleSignInAndUp = (state: UserState, action: UserAction) => {
    const token = action.payload?.token as string;
    const user = jwt.decode(token) as User;
    saveTokenInLS(token);
    state.currentUser = user;
    state.token = token;
    state.isAuth = true;
    return {
        currentUser: user,
        token,
        isAuth: true,
        authError: state.authError,
    };
};

export const handleLogout = (state: UserState, action: UserAction) => {
    removeTokenFromLS();
    const errMessage = action.payload?.errMessage;
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
        authError: state.authError,
    };
};
