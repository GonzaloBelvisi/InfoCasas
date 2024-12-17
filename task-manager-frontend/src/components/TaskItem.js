import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <div>
            <h4>{task.name}</h4>
            <p>{task.completed ? '✅ Completada' : '❌ Pendiente'}</p>
            <button onClick={() => onEdit(task)}>✏️ Editar</button>
        </div>
    );
};

export default TaskItem;
