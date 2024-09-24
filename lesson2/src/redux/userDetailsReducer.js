import {types} from "./types";

const initialState ={
    userDetails: {}
}

export default function userDetailsReducer(state = initialState, action){
    if(action.type === types.USER_DETAILS){
        return { ...state, userDetails: {
                ...state.userDetails,
                [action.payload.id]: action.payload,
            },}
    }
    return state
}