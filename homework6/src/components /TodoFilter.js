import React from 'react';
import {setFilter} from "../store/todoSlice";
import {useDispatch, useSelector} from "react-redux";

const TodoFilter = () => {

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todoReducer.filter);

    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>
                Все
            </button>
            <button onClick={() => dispatch(setFilter('completed'))} disabled={filter === 'completed'}>
                Выполненные
            </button>
            <button onClick={() => dispatch(setFilter('uncompleted'))} disabled={filter === 'uncompleted'}>
                Невыполненные
            </button>
        </div>
    );
};

export default TodoFilter;