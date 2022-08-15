import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { phoneReducer } from "./phoneReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    phone: phoneReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
