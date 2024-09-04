const initialState = {
    mainPageTitle: 'Welcome to Redux',
    aboutPageTitle: 'old title',
    contactPageTitle: '',
    counter: 0
}

export default function  reducer (state = initialState, action) {

    // if(action.type === 'CHANGE_TITLE') {
    //     return {mainPageTitle: 'Redux'}
    // }
    // else if(action.type === 'CHANGE_ABOUT_TITLE') {
    //     return {aboutPageTitle: 'new title'}
    // }
    // else if(action.type === 'WITH_PARAMS'){
    //     return {contactPageTitle: action.payload}
    // }
    // else if(action.type === 'FROM_INPUT'){
    //     return {contactPageTitle: action.payload}
    // }
    if (action.type === 'INCREMENT'){
        return {counter: state.counter + action.payload}
    }
    else if (action.type === 'DECREMENT'){
        return {counter: Math.max(0, state.counter - action.payload)}
    }
    else if(action.type === 'RESET'){
        return {counter: 0}
    }
    return state
}