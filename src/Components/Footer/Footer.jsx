import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.scss"

export default function Footer() {
  return (
    <footer>
      <div className='first_content'>
        <div className='first_content-about'>
          <div>
            <img src="./Images/Frame.png" />
            <p>We cook by hand and with love</p>
          </div>
          <div>
            <img src="./Images/Group 18.svg" />
            <p>We will deliver it on the day of the order</p>
          </div>
          <div>
            <img src="./Images/Vector.png" />
            <p>100% almond flour and natural ingredients</p>
          </div>
        </div>
        <p>© 2021 MacaronShop <br /> Quantum LLC, St. Petersburg, Marshal Tukhachevsky Street, 22</p>
      </div>
      <div className='second_content'>
        <div className='info_links'>
          <h4>INFO</h4>
          <Link to="/">About the company</Link>
          <Link to="/">Guarantees of taste and freshness</Link>
          <Link to="/">Delivery and payment</Link>
          <Link to="/">Contacts</Link>
        </div>
        <div className='catalog_links'>
          <h4>CATALOG</h4>
          <Link to="/">Dessert catalog</Link>
          <Link to="/">Ready-made kits</Link>
          <Link to="/">Assemble your own set</Link>
          <Link to="/">Stocks</Link>
        </div>
        <div className='business_links'>
          <h4>FOR BUSINESS</h4>
          <Link to="/">Corporate gifts</Link>
          <Link to="/">For legal entities</Link>
          <Link to="/">Wholesalers</Link>
        </div>
      </div>
      <div className='third_content'>
        <div className='third_content-about'>
          <h4>+7 (812) 309 82 88</h4>
          <p>from 9:00 to 21:00</p>
        </div>
        <div className='social'>
          <Link to="https://www.instagram.com/" target='_blank'><img src="Images/instagram.png" /></Link>
          <Link to="https://www.facebook.com/" target='_blank'><img src="Images/facebook.png" /></Link>
          <Link to="https://vk.com/" target='_blank'><img src="Images/vkontakte.png" /></Link>
        </div>
      </div>
    </footer>
  )
}
