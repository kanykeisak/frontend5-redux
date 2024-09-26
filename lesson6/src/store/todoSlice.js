import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        filter: 'all'
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTask: (state, action) =>{
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const {addTask, setFilter, toggleTask, deleteTask} = todoSlice.actions

export default todoSlice.reducer;