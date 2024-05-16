import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SignIn from '../Modal/SignIn/SignIn';
import SignUp from '../Modal/SignUp/SignUp';
import "./Header.scss"

export default function Header() {
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const handleSignIn = ()=>{
    setSignIn(!signIn)
  }
  const handleSignUp = ()=>{
    setSignUp(!signUp)
  }
  const handleClose = ()=>{
    setSignUp(false)
    setSignIn(false)
  }
  const handleRegister = ()=>{
    setSignIn(false)
    setSignUp(!signUp)
  }
  const handleLogin = ()=>{
    setSignUp(false)
    setSignIn(!signIn)
  }
  return (
    <div className='Header'>
      {signIn ? <SignIn handleClose={handleClose} handleRegister={handleRegister}/> :null}
      {signUp ? <SignUp handleClose={handleClose} handleLogin={handleLogin}/> :null}
      <div className='Header_head'>
        <div className='Header_head__left_side'>
          <Link to="/">Freshness guarantee</Link>
          <Link to="/">Delivery and payment</Link>
          <Link to="/">Wholesale supplies</Link>
          <Link to="/">Contacts</Link>
        </div>
        <div className='Header_head__right_side'>
          <p><i className="bi bi-geo-alt"></i> Kapan</p>
          <p><i className="bi bi-phone"></i> 8 812 309-82-88</p>
          <p><i className="bi bi-cart"></i> CART</p>
          <div className='login'>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
      <nav>
        <div className='left_side'>
          <Link to="/">SWEET DAYS <img src="Images/discount.svg"/></Link>
          <Link to="/">GIFT SETS</Link>
          <Link to="/">ASSEMBLE A SET</Link>
        </div>
        <Link to="/"><img src="Images/LOGO.png"/></Link>
        <div className='right_side'>
          <Link to="/">CREATE A DESIGN</Link>
          <Link to="/">FOR COMPANIES</Link>
          <Link to="/">ENTIRE CATALOG</Link>
        </div>
      </nav>
    </div>
  )
}
