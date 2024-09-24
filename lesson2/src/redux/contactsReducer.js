import {types} from "./types";

const initialState = {
    contactPageTitle: '',
}

export default function contactsReducer(state = initialState, action){
    if(action.type === types.WITH_PARAMS){
        return { ...state, contactPageTitle: action.payload}
    }
    else if(action.type === types.FROM_INPUT){
        return { ...state,contactPageTitle: action.payload}
    }
    return state
}