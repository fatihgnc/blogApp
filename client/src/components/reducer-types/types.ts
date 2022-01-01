import { RpcError } from 'grpc-web';
import { User } from '../../models/user';

export enum UserActionTypes {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_UP = 'USER_SIGN_UP',
    USER_LOG_OUT = 'USER_LOG_OUT',
}

export interface UserActionPayload {
    token?: string;
    errMessage?: string;
}

export interface UserAction {
    type: UserActionTypes;
    payload?: UserActionPayload;
}

export interface UserState {
    isAuth: boolean;
    currentUser: User | null;
    token: string | null;
    authError: RpcError | null;
}
