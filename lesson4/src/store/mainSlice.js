import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        title: 'old title'
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ''
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        deleteTitle: (state, action) => {
            state.title = ''
            state.inputValue = ''
        }
    }
})

export const { changeTitle, changeTitleWithParams, changeInputAction, deleteTitle} = mainSlice.actions

export default mainSlice.reducer