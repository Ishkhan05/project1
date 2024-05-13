import React from 'react'
import { useSelector } from 'react-redux'
import { getAllItems } from '../../../features/Care/careSlice'
import "./Content6.scss"

export default function Content6() {
  const care = useSelector(getAllItems)
  return (
    <div className='Content6'>
      <h1>We have taken care of everything.</h1>
      <div className="Content6_items">
        {
          care.map(elem=>{
            return(
              <div key={elem.id} className='Content6_items_item'>
                <img src={elem.image}/>
                <h3>{elem.title}</h3>
                <p>{elem.desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
