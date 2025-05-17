import React, { useState } from 'react';
import api from '../api';

export default function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState('');

    const addTask = () => {
        api.post('/', { title, completed: false }).then(res => {
            onTaskAdded(res.data);
            setTitle('');
        });
    };

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter task" />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}
