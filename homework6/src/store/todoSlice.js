import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        filter: 'all',
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload.text,
                priority: action.payload.priority,
                completed: false,
            });
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.text = action.payload.text;
                task.priority = action.payload.priority;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleTask, deleteTask, editTask, setFilter } = todosSlice.actions;

export default todosSlice.reducer;
