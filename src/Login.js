import React from 'react'
import './Login.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InboxIcon from '@mui/icons-material/Inbox';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState } from 'react';
import { auth, githubProvider } from './firebase';

function Login( {toggleForm, onUserLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            signIn({
                email: auth.user.email,
                uid: auth.user.uid,
              })
            onUserLogin(); // Call onUserLogin callback prop
            console.log(auth);
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
    <div className='login-page'>
        
    <form className='login-form'>
        <div className='logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/1200px-Faze_Clan.svg.png' alt='logo' />
            <h3>Toshi-Devs</h3>
        </div>
        <h1>Login</h1>
        <div className='input-container'>
          <InboxIcon className='icon' />
          <input type='email' 
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="on"
          placeholder='Email' 
          id='email' />
        </div>
        <div className='input-container'>
          <VpnKeyIcon className='icon' />
          <input type='password'
            onChange={(e) => setPassword(e.target.value)}
           placeholder='Password' 
           id='password' />
        </div>
        <button type='submit' onClick={signIn}><h4>Login</h4></button>

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

        <div className='login-register'>
         <p>Don't have an account? <a onClick={toggleForm} >Sign up</a></p>
        </div>
        
        

    </div>
  )
}

export default Login