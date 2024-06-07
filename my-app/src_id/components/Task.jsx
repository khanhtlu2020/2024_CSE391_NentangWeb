import React from 'react';
import Button from './Button';
import '../bootstrap/dist/css/bootstrap.css';
import './custom.css';

function Task(props) {
    return (
        <div className="d-flex align-items-center bg-light p-2 mb-2">
            <p className="flex-grow-1 text-truncate" id='task_name' style={{ width: '150px', marginLeft: 'auto', marginRight:'auto' }}>
                {props.task.name}
            </p>
            <Button className="btn btn-success btn-sm mr-2" text="Edit" onClick={() => props.onEdit(props.task)} />
            <Button className="btn btn-danger btn-sm" text="Delete" onClick={() => props.onDelete(props.task.id)} />
        </div>
    );
}

export default Task;
