import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../store/todoSlice";

const TaskFilter = () => {

    const filter = useSelector(state => state.todoReducer.filter)

    const dispatch = useDispatch()

    return (
        <div className="task-filter">
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => dispatch(setFilter('all'))}
            >
                Все
            </button>
            <button
                className={filter === 'active' ? 'active' : ''}
                onClick={() => dispatch(setFilter('active'))}
            >
                Активные
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => dispatch(setFilter('completed'))}
            >
                Завершенные
            </button>
        </div>
    );
};

export default TaskFilter;