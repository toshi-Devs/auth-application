import React from 'react';
import './Home.css';
import { useAuth } from './context/AuthContext';
import { auth } from './firebase';


const Home = () => {
  const { currentUser } = useAuth();
  const photo = "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png";

  const handleSignOut = () => {
    // Call the signOut method from the firebase.auth() object
    auth.signOut();
    // <Login />
  }

  
  if (!currentUser) {
    // Add a check to ensure currentUser is defined before rendering
    return (
      <div className='home-page'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='home-page'>
      
      <div className='user-info'>
      <img src={photo} alt={currentUser.displayName} />
      <p>Display Name: {currentUser.displayName}</p>
      <p>Email: {currentUser.email}</p>
      <p>UID: {currentUser.uid}</p>
      <p>Password: *********</p>
      <div className='buttons-container'>
      <button id='edit-btn'> Edit</button>
      <button id='signout-btn' onClick={handleSignOut}>Sign Out</button>
      </div>
      
      </div>
    </div>
    

  );
};

export default Home;
