import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.scss"

export default function SignUp() {
  return (
    <div className='SignUp'>
      <i className="bi bi-x-lg"></i>
      <div className="SignUp_content">
        <img src="Images/Modal_images/Signup.png" />
        <h1>Get access to wholesale prices</h1>
        <h4>Complete the registration process</h4>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type="name" id='name' />
            <label htmlFor='phone'>Phone</label>
            <input type="tel" id='phone' />
            <label htmlFor='email'>E-mail</label>
            <input type="email" id='email' />
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' />
            <label htmlFor='company'>Company</label>
            <input type="text" id='company' />
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' />
          </div>
          <input type="submit" value="Send a registration request" />
        </form>
        <div className='SignUp__footer'>
          <p>Already registered? <Link to="/">Sign In</Link></p>
          <p>
            By clicking on the `Send registration request` button, I accept and agree to
            <Link to="/">the Offer Agreement</Link>
            and authorize the processing of my personal data in accordance with
            <Link to="/">the Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}