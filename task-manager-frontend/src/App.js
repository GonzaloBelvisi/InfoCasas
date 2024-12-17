import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask({ name, completed: false });
        setName('');
        fetchTasks();
    };

    const handleToggleCompleted = async (task) => {
        await updateTask(task.id, { ...task, completed: !task.completed });
        fetchTasks();
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Gestión de Tareas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Crear Tarea"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit" style={{ marginLeft: '10px' }}>
                    Guardar
                </button>
            </form>
            <div className="task-list">
                {tasks.map((task) => (
                    <div key={task.id} className="task-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4>{task.name}</h4>
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleCompleted(task)}
                                    />
                                    {task.completed ? ' ✅ Completada' : ' ❌ Pendiente'}
                                </label>
                            </p>
                        </div>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            style={{
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
