import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.scss"

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h4>Sorry, the page was not found</h4>
      <div className='ErrorPage_content'>
        <img src="/Images/ErrorPages_images/404.png" className='error'/>
        <img src="/Images/ErrorPages_images/Cookie.png" className='cookie'/>
        <img src="/Images/ErrorPages_images/PieceOfCookie.png" className='pieceOfCookie'/>
        <img src="/Images/ErrorPages_images/Sad.png" className='sad'/>
      </div>
      <Link to="">Back</Link>
    </div>
  )
}
