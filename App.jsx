import React, { useState } from 'react';
import './App.css';

function App() {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);

const addTask = () => {
if (task.trim() !== '') {
setTasks([...tasks, task]);
setTask('');
}
};

const deleteTask = (index) => {
const newTasks = tasks.filter((_, i) => i !== index);
setTasks(newTasks);
};

return (
<div className="app">
<h1>To-Do List</h1>
<div className="input-container">
<input
type="text"
placeholder="Enter a task..."
value={task}
onChange={(e) => setTask(e.target.value)}
/>
<button onClick={addTask}>Add</button>
</div>
<ul className="task-list">
{tasks.map((t, index) => (
<li key={index}>
{t}
<button className="delete" onClick={() => deleteTask(index)}>Delete</button>
</li>
))}
</ul>
</div>
);
}

export default App;

