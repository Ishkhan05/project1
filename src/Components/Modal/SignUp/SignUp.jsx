import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
import "./SignUp.scss"

export default function SignUp({handleClose,handleLogin}) {
  const handleSubmit = (e)=>{
    e.preventDefault()

    const data={
      email: e.target.email.value.toLowerCase(),
      password: e.target.password.value,
      returnSecureToken: true,
      // name: e.target.name.value,
      // phone: e.target.phone.value,
      // city: e.target.city.value,
      // company: e.target.company.value,
    }

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    e.target.reset()
  }

  return (
    <div className='SignUp'>
      <i className="bi bi-x-lg" onClick={handleClose}></i>
      <div className="SignUp_content">
        <img src="Images/Modal_images/Signup.png" />
        <h1>Get access to wholesale prices</h1>
        <h4>Complete the registration process</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type="name" id='name' required/>
            <label htmlFor='phone'>Phone</label>
            <input type="tel" id='phone' required/>
            <label htmlFor='email'>E-mail</label>
            <input type="email" id='email' required/>
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' required/>
            <label htmlFor='company'>Company</label>
            <input type="text" id='company' required/>
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' required/>
          </div>
          <input type="submit" value="Send a registration request" />
        </form>
        <div className='SignUp__footer'>
          <p>Already registered? <span onClick={handleLogin}>Sign In</span></p>
          <p className='privacy'>
            By clicking on the `Send registration request` button, I accept and agree to
            <Link to="/"> the Offer Agreement </Link>
            and authorize the processing of my personal data in accordance with
            <Link to="/"> the Privacy Policy </Link> 
          </p>
        </div>
      </div>
    </div>
  )
}