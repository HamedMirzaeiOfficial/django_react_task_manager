import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication API calls
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('login/', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Task-related API calls
export const fetchTasks = async (token) => {
  try {
    const response = await api.get('tasks/', {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (token, newData) => {
    try {
      const response = await api.post('tasks/', newData, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const getTask = async (token, taskId) => {
  try {
    const response = await api.get(`tasks/${taskId}/`, {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (token, taskId, newData) => {
  try {
    const response = await api.put(`tasks/${taskId}/`, newData, {
      headers: { Authorization: `JWT ${token}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (token, taskId) => {
  try {
    const response = await api.delete(`tasks/${taskId}/`, {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
