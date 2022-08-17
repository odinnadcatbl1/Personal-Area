import axios from "axios";
import { Dispatch } from "react";
import {
    IUser,
    LogAction,
    UserActionTypes,
    PhoneAction,
    PhoneActionTypes,
} from "../../types/types";

export const loginUser = (user: IUser) => {
    return async (dispatch: Dispatch<LogAction | PhoneAction>) => {
        try {
            dispatch({ type: UserActionTypes.LOGIN_USER_REQUEST });
            const res = await axios.post("http://localhost:3000/login", {
                email: user.email,
                password: user.password,
            });
            dispatch({
                type: PhoneActionTypes.PHONE_REQUEST,
                payload: res.data.user.phones,
            });

            dispatch({
                type: UserActionTypes.LOGIN_USER_SUCCESS,
                payload: { ...res.data.user, password: user.password },
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.LOGIN_USER_FAILURE,
                payload: "Проверьте введенные данные",
            });
        }
    };
};

export const logoutUser = () => {
    return {
        type: UserActionTypes.LOGOUT_USER,
    };
};
