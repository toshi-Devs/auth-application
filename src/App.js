import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Import the Home component

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // State variable to track user login status

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleUserLogin = () => {
    setUserLoggedIn(true); // Set userLoggedIn to true when the user logs in or registers
  };

  return (
    <div className="app">
      <Home />
      {/* {userLoggedIn ? (
        <Home /> // Render the Home component when the user is logged in
      ) : showLogin ? (
        <Login toggleForm={toggleForm} onUserLogin={handleUserLogin} /> // Pass onUserLogin as a callback to Login
      ) : (
        <Signup toggleForm={toggleForm} onUserLogin={handleUserLogin} /> // Pass onUserLogin as a callback to Signup
      )} */}
    </div>
  );
}

export default App;
