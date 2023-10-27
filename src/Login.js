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
        {/* <h1>Login</h1> */}
        <form className='login-form'>
            {/* <InboxIcon className='icon'/> */}
            <input type='email' placeholder='Email' id='email' />
            {/* <VpnKeyIcon className='icon'/> */}
            <input type='password' placeholder='Password' id='password' />
            <button type='submit'>Login</button>
        </form>

        <div className='social-media'>
        <p>Or continue with these social profile</p>
        <button href='#' className='social-btn'><FacebookIcon /></button>
        <button href='#' className='social-btn'><GitHubIcon /></button>
        <button href='#' className='social-btn'><LinkedInIcon/></button>

        </div>

        <div className='login-register'>
         <p>Don't have an account? <a href='#'>Sign up</a></p>
        </div>
        

    </div>
  )
}

export default Login