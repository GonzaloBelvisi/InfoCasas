import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const TaskForm = ({ taskToEdit, onTaskCreated }) => {
    const [name, setName] = useState(taskToEdit?.name || '');
    const [completed, setCompleted] = useState(taskToEdit?.completed || false);

    useEffect(() => {
        setName(taskToEdit?.name || '');
        setCompleted(taskToEdit?.completed || false);
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (taskToEdit) {
            await updateTask(taskToEdit.id, { name, completed });
        } else {
            await createTask({ name, completed });
        }
        onTaskCreated();
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la tarea"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
                ¿Completada?
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default TaskForm;
