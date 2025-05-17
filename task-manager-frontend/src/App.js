import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={() => setRefreshKey(oldKey => oldKey + 1)} />
            <TaskList key={refreshKey} />
        </div>
    );
}

export default App;
