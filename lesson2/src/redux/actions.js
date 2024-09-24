import {types} from "./types";


export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(){
    return{
        type: types.WITH_PARAMS,
        payload: 'hello geeks'
    }
}

export function fromInputAction(input) {
    return{
        type: types.FROM_INPUT,
        payload: input
    }
}

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('Hello')
        }, 2000)
    }
}

function getUsersAction(users) {
    return{
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

function getUserDetailsAction(user) {
    return {
        type: types.USER_DETAILS,
        payload: user,
    };
}

export function fetchUserDetailsAction(userId) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        dispatch(getUserDetailsAction(data));
    };
}