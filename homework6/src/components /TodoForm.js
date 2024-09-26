import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todoSlice';

const TodoForm = () => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('low');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask({ text, priority }));
            setText('');
            setPriority('low');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задачу..."
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Низкий приоритет</option>
                <option value="medium">Средний приоритет</option>
                <option value="high">Высокий приоритет</option>
            </select>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;
