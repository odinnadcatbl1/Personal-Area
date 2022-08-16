import { IPhone, PhoneActionTypes } from "../../types/types";

export const addPhone = (phone: IPhone) => {
    return {
        type: PhoneActionTypes.PHONE_ADD,
        payload: phone,
    };
};

export const deletePhone = (id: string) => {
    return {
        type: PhoneActionTypes.PHONE_DELETE,
        payload: id,
    };
};

export const changePhone = (phone: IPhone) => {
    return {
        type: PhoneActionTypes.PHONE_CHANGE,
        payload: phone,
    };
};
