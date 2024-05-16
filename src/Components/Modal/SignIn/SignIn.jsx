import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
import "./SignIn.scss"

export default function SignIn({handleClose,handleRegister}) {
  const handleSubmit = (e)=>{
    e.preventDefault()

    const data={
      email: e.target.email.value.toLowerCase(),
      password: e.target.password.value,
      returnSecureToken: true,
    }

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    e.target.reset()
  }

  return (
    <div className='SignIn'>
      <i className="bi bi-x-lg" onClick={handleClose}></i>
      <div className="SignIn_content">
        <img src="Images/Modal_images/authorisation.png"/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-mail</label>
          <input type="email" id='email'/>
          <label htmlFor='password'>Password</label>
          <input type="password" id='password'/>
          <Link to="/">Forgot your password?</Link>
          <input type="submit" value="Sign In"/>
        </form>
        <p>Not registered yet?</p>
        <span onClick={handleRegister}>Sign Up</span>
      </div>
    </div>
  )
}
