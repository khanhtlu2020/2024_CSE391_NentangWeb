import React from 'react';
import Task from './Task';

function TasksList(props) {
    return (
        <div className="flex flex-col gap-y-2">
            {props.tasks.map((task, index) => (
                <Task key={index} task={task} onEdit={props.onEdit} onDelete={props.onDelete} />
            ))}
        </div>
    );
}

export default TasksList;
