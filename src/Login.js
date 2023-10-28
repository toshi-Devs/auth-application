import React from 'react'
import './Login.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InboxIcon from '@mui/icons-material/Inbox';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Login() {
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
          <input type='email' placeholder='Email' id='email' />
        </div>
        <div className='input-container'>
          <VpnKeyIcon className='icon' />
          <input type='password' placeholder='Password' id='password' />
        </div>
        <button type='submit'><h4>Login</h4></button>

        {/* // Social media buttons I just put everything in form div */}
        <div className='social-media'>
        <p>Or continue with these social profile</p>
        <button href='#' className='social-btn'><FacebookIcon /></button>
        <button href='#' className='social-btn'><GitHubIcon /></button>
        <button href='#' className='social-btn'><LinkedInIcon/></button>

        </div>

        <div className='login-register'>
         <p>Don't have an account? <a href='#'>Sign up</a></p>
        </div>

      </form>

        
        

    </div>
  )
}

export default Login