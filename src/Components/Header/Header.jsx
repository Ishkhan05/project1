import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss"

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header_head'>
        <div className='Header_head__left_side'>
          <Link to="/">Freshness guarantee</Link>
          <Link to="/">Delivery and payment</Link>
          <Link to="/">Wholesale supplies</Link>
          <Link to="/">Contacts</Link>
        </div>
        <div className='Header_head__right_side'>
          <i className="bi bi-geo-alt"></i>
          <p>
            !!!Kapan!!!
          </p>
          <p>8 812 309-82-88</p>
          <p>CART</p>
          <div className='webs'>
            <Link to="/">telegram</Link>
            <Link to="/">vk</Link>
            <Link to="/">ok</Link>
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
