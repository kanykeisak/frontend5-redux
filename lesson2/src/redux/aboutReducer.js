import {types} from "./types";

const initialState ={
    aboutPageTitle: 'old title',
}

export default function aboutReducer(state = initialState, action){
    if(action.type === types.CHANGE_TITLE) {
        return { ...state, aboutPageTitle: 'new title'}
    }
    return state
}