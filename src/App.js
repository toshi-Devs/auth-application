import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';


function App() {

  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (

    <div className="app">
      
      {showLogin ? <Login toggleForm={toggleForm} /> 
      : <Signup toggleForm={toggleForm} />}
   
      {/* <Login /> */}
      {/* <Signup /> */}

    </div>
  );
}

export default App;
