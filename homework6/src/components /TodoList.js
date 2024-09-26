import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../store/todoSlice';

const TodoList = () => {
    const { tasks, filter } = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();


    const sortedTasks = [...tasks].sort((a, b) => {
        const priorities = { high: 3, medium: 2, low: 1 };
        return priorities[b.priority] - priorities[a.priority];
    });

    const filterTasks = sortedTasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'uncompleted') return !task.completed;
        return true;
    });

    return (
        <ul>
            {filterTasks.map((task) => (
                <li key={task.id}>
          <span
              style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
              }}
              onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text} ({task.priority})
          </span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
