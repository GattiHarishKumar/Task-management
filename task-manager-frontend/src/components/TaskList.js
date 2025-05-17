import React, { useEffect, useState } from 'react';
import api from '../api';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get('/')
           .then(res => setTasks(res.data))
           .catch(err => console.error(err));
    }, []);

    const toggleComplete = (task) => {
        api.put(`/${task.id}`, { ...task, completed: !task.completed })
           .then(() => {
               setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
           });
    };

    const deleteTask = (id) => {
        api.delete(`/${id}`).then(() => setTasks(tasks.filter(t => t.id !== id)));
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.title}
                        </span>
                        <button onClick={() => toggleComplete(task)}>Toggle</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
