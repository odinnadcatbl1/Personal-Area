import { LogAction, UserActionTypes } from "../../types/types";
import { UserState } from "../../types/types";

const initialState: UserState = {
    user: {
        email: "",
        password: "",
        id: 0,
    },
    loading: true,
    error: "",
};

export const userReducer = (
    state = initialState,
    action: LogAction
): UserState => {
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
        case UserActionTypes.LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
};
