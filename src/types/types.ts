export interface IUser {
    email: string;
    password?: string;
    phones: string[];
    id: number;
}

export interface UserState {
    user: IUser;
    loading: boolean;
    error: string;
}

export enum UserActionTypes {
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE",
    LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST",
    LOGOUT_USER = "LOGOUT_USER",
}

interface RequestLoginAction {
    type: UserActionTypes.LOGIN_USER_REQUEST;
}

interface SuccessLoginAction {
    type: UserActionTypes.LOGIN_USER_SUCCESS;
    payload: IUser;
}

interface FailureLoginAction {
    type: UserActionTypes.LOGIN_USER_FAILURE;
    payload: string;
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}

export type LogAction =
    | RequestLoginAction
    | SuccessLoginAction
    | FailureLoginAction
    | LogoutUserAction;
