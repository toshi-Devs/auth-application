import React from 'react';
import './Edit.css';
import {auth} from './firebase';
import { useAuth } from './context/AuthContext';
import { useState } from 'react';

function Edit() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/1200px-Faze_Clan.svg.png";
    const photo = "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png";
    const handleSignOut = () => {
        // Call the signOut method from the firebase.auth() object
        auth.signOut();
        // <Login />
      }
    const { currentUser } = useAuth();


  return (
    <div className='edit-page'>
        <div className='header'> 
            <div className='left-header'>
            <img src={logo}/>
            <h3>Toshi-Devs</h3>
            </div>
            <div className='right-header'>
            <button id='signout-btn' onClick={handleSignOut}>Sign Out</button>
            </div>
      </div>
      <div className='edit-form'>
        <div className='edit-form-header'>
          <h1>Edit Profile</h1>
          <p>Changes will be reflected to every services</p>
        </div>
        <div className='edit-form-image'>
          
          <img src={currentUser && currentUser.photoURL
                      ? currentUser.photoURL : photo} 
          alt='logo' />
          <h2>Change Photo</h2>
          </div>
        <div className='edit-form-body'>
            <h2>Name</h2>
            <input type='text' placeholder='Enter your name...' />
        </div>
        <div className='edit-form-body'>
            <h2>Email</h2>
            <input type='text' placeholder='Enter your email...' />
        </div>
        <div className='edit-form-body'>
            <h2>Phone</h2>
            <input type='text' placeholder='Enter your phone...' />
        </div>
        <div className='edit-form-body'>
            <h2>Password</h2>
            <input type='text' placeholder='Leave blank to keep the same' />
        </div>

        <div className='buttons-container'>
        <button id='save-btn'> Save</button>
        </div>

        </div>
    </div>
  )
}

export default Edit