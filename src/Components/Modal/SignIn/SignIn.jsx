import React from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.scss"

export default function SignIn() {
  return (
    <div className='SignIn'>
      <i className="bi bi-x-lg"></i>
      <div className="SignIn_content">
        <img src="Images/Modal_images/authorisation.png"/>
        <h1>Sign In</h1>
        <form>
          <label htmlFor='email'>E-mail</label>
          <input type="email" id='email'/>
          <label htmlFor='password'>Password</label>
          <input type="password" id='password'/>
          <Link to="/">Forgot your password?</Link>
          <input type="submit" value="Sign In"/>
        </form>
        <p>Not registered yet?</p>
        <Link to="/">Sign Up</Link>
      </div>
    </div>
  )
}
