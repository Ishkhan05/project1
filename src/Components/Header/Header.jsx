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
          <div className='geo'>
            <i className="bi bi-geo-alt"></i>
            <p>Kapan</p>
          </div>
          <div className='phone'>
            <i className="bi bi-phone"></i>
            <p>8 812 309-82-88</p>
          </div>
          <div className='cart'>
            <i className="bi bi-cart"></i>
            <p>CART</p>
          </div>
          <div className='webs'>
            <Link to="/"><img src="Images/tg.png" /></Link>
            <Link to="/"><img src="Images/vk.png" /></Link>
            <Link to="/"><img src="Images/ok.png" /></Link>
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
