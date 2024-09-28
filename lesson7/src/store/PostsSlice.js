import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, { dispatch }) {
        dispatch(preloaderOn())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (response.status >= 200 || response.status <= 204) {
            const posts = await response.json()
            dispatch(postsInfo(posts))
            dispatch(preloaderOff())
        }
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        preloader: false
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        },
        preloaderOn: (state, action) => {
            state.preloader = true
        },
        preloaderOff: (state, action) => {
            state.preloader = false
        }
    }
})

export const { postsInfo, preloaderOn, preloaderOff } = postsSlice.actions;

export default postsSlice.reducer