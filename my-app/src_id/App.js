import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
    ]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleEditTask = (task) => {
        const newTaskName = prompt('Edit task name:', task.name);
        if (newTaskName) {
            setTasks(tasks.map(t => (t.id === task.id ? { ...t, name: newTaskName } : t)));
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <AddTask onAdd={handleAddTask} />
            <TasksList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
        </div>
    );
}

export default App;
