import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="signup-page">
      
        
        <form className='signup-form'>
        <h1>Sign Up</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Sign Up" />
        </form>
      
    </div>
  )
}

export default Signup;