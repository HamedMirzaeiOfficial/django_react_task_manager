// In components/Tasks.js

import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';

const Tasks = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const fetchUserTasks = async () => {
    try {
      const tasksData = await fetchTasks(token);
      setTasks(tasksData);
    } catch (error) {
      console.error('Fetch tasks error:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserTasks();
    }
  }, [token]);

  // Tasks.js
  const handleCreateTask = async () => {
    try {
      await createTask(token, newTask);
      setNewTask({ title: '', description: '' });
      // After creating the task, fetch updated tasks
      fetchUserTasks();
    } catch (error) {
      console.error('Create task error:', error);
    }
  };

  

  const handleUpdateTask = async (taskId, title, description) => {
    try {
      await updateTask(token, taskId, title, description);
      // After updating the task, fetch updated tasks
      fetchUserTasks();
    } catch (error) {
      console.error('Update task error:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(token, taskId);
      // After deleting the task, fetch updated tasks
      fetchUserTasks();
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
            {/* <button onClick={() => handleUpdateTask(task.id, 'Updated Title', 'Updated Description')}>
              Update
            </button> */}
            <button className="delete-btn"  onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Create Task</h3>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
    </div>
  );
};

export default Tasks;
