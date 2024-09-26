import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../store/todoSlice";

const AddTask = () => {

    const [taskText, setTaskText] = useState('')

    const dispatch = useDispatch()

    const handleAddTask = () => {
        if (taskText.trim()){
            dispatch(addTask(taskText))
        }
    }

    return (
        <div className="add-task">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Добавить</button>
            
        </div>
    );
};

export default AddTask;