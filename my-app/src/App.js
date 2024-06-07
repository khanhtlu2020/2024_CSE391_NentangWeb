import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
        { id: 4, name: 'Task 4' },
        { id: 5, name: 'Task 5' },
    ]);

    // const handleAddTask = (task) => {
    //     setTasks([...tasks, task]);
    // };

    const handleAddTask = (task) => {
        
        const maxId = tasks.reduce((max, t) => (t.id > max ? t.id : max), 0);

        const newTask = { id: maxId + 1, name: task.name };

        setTasks([...tasks, newTask]);
    };

    const handleEditTask = (task) => {
        const newTaskName = prompt('Edit task name:' + task.name, task.name);
        if (newTaskName) {
            setTasks(tasks.map(t => (t.id === task.id ? { ...t, name: newTaskName } : t)));
            alert("Edit with id:" + task.id); // Sửa thành task.id
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
        alert("Delete with id:" +id);
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
