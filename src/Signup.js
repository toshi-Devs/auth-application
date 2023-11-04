import React from 'react'
import './Signup.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InboxIcon from '@mui/icons-material/Inbox';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { auth, githubProvider } from './firebase';


function Signup( {toggleForm, onUserLogin}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password, confirmPassword)
    .then ((auth) => {
      register({
        email: auth.user.email,
        uid: auth.user.uid,
      })
      onUserLogin(); // Call onUserLogin callback prop
    })
    .catch(error => alert(error.message))
  }
  const onGithubSignIn = () => {
    auth.signInWithPopup(githubProvider)
    .then((auth) => {
      onUserLogin(); // Call onUserLogin callback prop
    })
    .catch(error => alert(error.message))
  }
  

  return (
    <div className="signup-page">
      
        
      <form className='signup-form'>
        <div className='logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/1200px-Faze_Clan.svg.png' alt='logo' />
            <h3>Toshi-Devs</h3>
        </div>
        <h1>Join thousands of learners from around the world</h1>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <div className='input-container'>
          <InboxIcon className='icon' />
          <input 
          type='email' 
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' 
          id='email' />
        </div>
        <div className='input-container'>
          <VpnKeyIcon className='icon' />
          <input 
          type='password' 
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' 
          id='password' />
        </div>
        <div className='input-container'>
          <CheckIcon className='icon' />
          <input 
          type='password' 
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password' 
          id='password' />
        </div>
        <button type='submit' onClick={ (e) => register(e)}><h4>Start coding now</h4></button>

        {/* // Social media buttons I just put everything in form div */}
        

      </form>
      <div className='social-media'>
        <p>Or continue with these social profile</p>
        <button href='#' 
        className='social-btn'><FacebookIcon /></button>
        <button onClick={onGithubSignIn}
        className='social-btn'><GitHubIcon /></button>
        <button href='#' 
        className='social-btn'><LinkedInIcon/></button>

        </div>

        <div className='signup-register'>
         <p>Already a member? <a onClick={toggleForm}>Login</a></p>
        </div>
      
    </div>
  )
}

export default Signup;