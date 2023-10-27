import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="header">
      
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Sign Up" />
        </form>
      
    </div>
  )
}

export default Signup;