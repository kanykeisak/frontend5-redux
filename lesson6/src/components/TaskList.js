import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, toggleTask} from "../store/todoSlice";

const TaskList = () => {

    const tasks = useSelector(state => {
        const {tasks, filter} = state.todoReducer
        if (filter === 'active')
            return tasks.filter((task) => !task.completed)
        if (filter === 'completed')
            return tasks.filter((task) => task.completed)
        return tasks;
    })

    const dispatch = useDispatch()

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => dispatch(toggleTask(task.id))}>
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;