import {combineReducers} from "redux";
import mainReducer from "./mainReducer";
import aboutReducer from "./aboutReducer";
import contactsReducer from "./contactsReducer";
import usersReducer from "./usersReducer";
import userDetailsReducer from "./userDetailsReducer";

export const rootReducer = combineReducers({
    mainReducer,
    aboutReducer,
    contactsReducer,
    usersReducer,
    userDetailsReducer
})

