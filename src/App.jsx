import React, { useState } from 'react';
import TaskForm from './components/TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
        <TaskForm onAddTask={handleAddTask} />
      </ul>
    </div>
  );
}

export default TaskList;