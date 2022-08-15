import { IPhone, PhoneActionTypes, PhoneAction } from "../../types/types";

export const addPhone = (phone: IPhone) => {
    return {
        type: PhoneActionTypes.PHONE_ADD,
        payload: phone,
    };
};

export const deletePhone = (number: string) => {
    return {
        type: PhoneActionTypes.PHONE_DELETE,
        payload: number,
    };
};

export const changePhone = (phone: IPhone) => {
    return {
        type: PhoneActionTypes.PHONE_CHANGE,
        payload: [phone.number, phone],
    };
};
