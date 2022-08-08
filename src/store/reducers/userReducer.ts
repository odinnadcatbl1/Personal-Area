import { LoginAction, UserActionTypes } from "../../types/types";
import { UserState } from "../../types/types";

const initialState: UserState = {
    user: {
        email: "",
        password: "",
        phones: [],
        id: 0,
    },
    loading: true,
    error: "",
};

export const userReducer = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case UserActionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
