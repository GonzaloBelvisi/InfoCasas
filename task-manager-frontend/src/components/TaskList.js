import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/taskService';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetchTasks();
    }, [search, filter]);

    const fetchTasks = async () => {
        const params = {};
        if (search) params.search = search;
        if (filter) params.completed = filter;

        try {
            const response = await getTasks(params);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="">Todas</option>
                <option value="true">Completadas</option>
                <option value="false">Pendientes</option>
            </select>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
