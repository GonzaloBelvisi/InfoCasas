import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskPage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh((prev) => !prev);
    };

    return (
        <div>
            <h1>Gestión de Tareas</h1>
            <TaskForm onTaskCreated={handleRefresh} />
            <TaskList key={refresh} />
        </div>
    );
};

export default TaskPage;
