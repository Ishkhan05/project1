import React from 'react'
import Slider2 from '../../Slider2/Slider2'
import { Link } from 'react-router-dom'
import "./Content5.scss"
import ROUTES from '../../../routes'

export default function Content5() {
  return (
    <div className='Content5'>
      <h1>News</h1>
      <div>
        <Slider2/>
      </div>
      <Link to={ROUTES.NEWS}>All news</Link>
    </div>
  )
}
