import React  from 'react'
import { useSelector } from 'react-redux'
import { getAllItems } from "../../../features/Choose/chooseSlice"
import { Link } from 'react-router-dom'
import "./Content2.scss"

export default function Content2() {
  const items = useSelector(getAllItems)
  
  return (
    <div className='Content2'>
      {
        items.map(elem=>{
          return(
            <div key={elem.id} style={{backgroundImage: `url(${elem.bgImage})`}}>
              <img src={elem.image} />
              <Link to="/">{elem.title} <i className="bi bi-arrow-right"></i></Link>
              <p>{elem.desc}</p>
            </div>
          )
        })
      }
    </div>
  )
}
