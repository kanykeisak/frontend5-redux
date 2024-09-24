import {types} from "./types";

const initialState = {
    mainPageTitle: 'Welcome to Redux',
}

export default function mainReducer(state = initialState, action) {
    if(action.type === types.CHANGE_TITLE) {
        return { ...state, mainPageTitle: 'Redux'}
    }
    return state
}