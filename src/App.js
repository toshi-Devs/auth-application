import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Import the Home component
import { useAuth } from './context/AuthContext';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const { currentUser } = useAuth();

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="app">
      {currentUser ? (
        <Home />
      ) : showLogin ? (
        <Login toggleForm={toggleForm}  />
      ) : (
        <Signup toggleForm={toggleForm}  />
      )}

    </div>
  );
}

export default App;
