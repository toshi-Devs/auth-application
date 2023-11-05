import React from 'react';
import './Home.css';
import { useAuth } from './context/AuthContext';
import { auth } from './firebase';


const Home = () => {
  const { currentUser } = useAuth();
  const photo = "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png";
  const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/1200px-Faze_Clan.svg.png";

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
      <div className='header'> 
        <div className='left-header'>
          <img src={logo}/>
          <h3>Toshi-Devs</h3>
        </div>
        <div className='right-header'>
          <button id='signout-btn' onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      
      <div className='user-info'>
          <div className='user-info-header'>
            <h1>Personal info</h1>
            <p>Basic info, like your name and photo</p>
          </div>
      <div className='user-info-body'>
          <h2>Photo</h2>
          <img src={currentUser && currentUser.photoURL
                      ? currentUser.photoURL : photo} 
          alt={currentUser.displayName} />
      </div>
      <div className='user-info-body'>
          <h2>Name</h2>
          <p>{currentUser &&currentUser.displayName ?
                            currentUser.displayName : 
                            currentUser.email.split('@')[0]}</p>
      </div>
      <div className='user-info-body'>
          <h2>Email</h2>
          <p>{currentUser.email}</p>
      </div>
      <div className='user-info-body'>
          <h2>Phone</h2>
          <p>Not added</p>
      </div>
      <div className='user-info-body'>
          <h2>Password</h2>
          <p>*********</p>
      </div>
      
      <div className='buttons-container'>
      <button id='edit-btn'> Edit</button>
      </div>
      
      </div>
    </div>
    

  );
};

export default Home;
