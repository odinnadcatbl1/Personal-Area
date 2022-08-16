import { PhoneAction, PhoneActionTypes, PhoneState } from "../../types/types";

const initialState: PhoneState = {
    phones: [],
};

export const phoneReducer = (
    state = initialState,
    action: PhoneAction
): PhoneState => {
    switch (action.type) {
        case PhoneActionTypes.PHONE_REQUEST:
            return { phones: action.payload };
        case PhoneActionTypes.PHONE_ADD:
            console.log(action.payload);
            return { ...state, phones: [...state.phones, action.payload] };
        case PhoneActionTypes.PHONE_DELETE:
            return {
                ...state,
                phones: [
                    ...state.phones.filter((phone) => {
                        return phone.id !== action.payload;
                    }),
                ],
            };
        case PhoneActionTypes.PHONE_CHANGE:
            const newPhone = action.payload;
            console.log(newPhone);
            return {
                ...state,
                phones: [
                    ...state.phones.filter((phone) => {
                        return phone.id !== newPhone.id;
                    }),
                    newPhone,
                ],
            };
        default:
            return state;
    }
};
