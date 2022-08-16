export interface IUser {
    email: string;
    password?: string;
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

export interface IPhone {
    name: string;
    number: string;
}

export interface PhoneState {
    phones: IPhone[];
}

export enum PhoneActionTypes {
    PHONE_REQUEST = "PHONE_REQUEST",
    PHONE_DELETE = "PHONE_DELETE",
    PHONE_ADD = "PHONE_ADD",
    PHONE_CHANGE = "PHONE_CHANGE",
}

interface PhoneRequestAction {
    type: PhoneActionTypes.PHONE_REQUEST;
    payload: IPhone[];
}

interface PhoneAddAction {
    type: PhoneActionTypes.PHONE_ADD;
    payload: IPhone;
}

interface PhoneDeleteAction {
    type: PhoneActionTypes.PHONE_DELETE;
    payload: string;
}

interface PhoneChangeAction {
    type: PhoneActionTypes.PHONE_CHANGE;
    payload: [string, IPhone];
}

export type PhoneAction =
    | PhoneRequestAction
    | PhoneAddAction
    | PhoneDeleteAction
    | PhoneChangeAction;

export interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}
