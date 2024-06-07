import React from 'react';
import Task from './Task';
import '../bootstrap/dist/css/bootstrap.css';

function TasksList(props) {
    return (
        <div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} onEdit={props.onEdit} onDelete={props.onDelete} />
            ))}
        </div>
    );
}

export default TasksList;
