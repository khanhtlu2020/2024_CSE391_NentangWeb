import React, { useState } from 'react';
import Button from './Button';
import '../bootstrap/dist/css/bootstrap.css';
import './custom.css'; // Import CSS tùy chỉnh

function AddTask(props) {
    const [taskName, setTaskName] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            props.onAdd({ name: taskName });
            setTaskName('');
        }
    };

    return (
        <div className="container-mt-3">
            <form onSubmit={handleAdd} className="form-inline">
                <input
                    type="text"
                    placeholder="Add item..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="form-control form-control-sm mr-2"
                />
                <Button className="btn-primary" text="Add" onClick={handleAdd} />
            </form>
        </div>
    );
}

export default AddTask;
