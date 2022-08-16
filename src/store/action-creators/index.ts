import * as LoginActionCreator from "./user";
import * as PhoneActionCreator from "./phone";

export default {
    ...LoginActionCreator,
    ...PhoneActionCreator,
};
