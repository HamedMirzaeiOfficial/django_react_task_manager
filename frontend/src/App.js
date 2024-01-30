// In your App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Tasks from './components/Tasks';
import { getToken, removeToken } from './services/auth';

const App = () => {
  const [token, setToken] = useState(getToken());

  const handleLogin = () => {
    setToken(getToken());
  };

  const handleLogout = () => {
    removeToken();
    setToken(null);
  };

  return (
    <div>
      <h1>My Microservice Project</h1>
      {token ? (
        <div>
          <button className="delete-btn" onClick={handleLogout}>Logout</button>
          <Tasks token={token} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
