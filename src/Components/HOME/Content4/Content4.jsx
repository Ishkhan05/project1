import React from 'react'
import { useSelector } from 'react-redux'
import { getAllItems } from '../../../features/PopularSets/popularSetsSlice'
import "./Content4.scss"
import { Link } from 'react-router-dom'

export default function Content4() {
  const sets = useSelector(getAllItems)
  console.log(sets)
  return (
    <div className='Content4'>
      <h1>Popular sets</h1>
      <div className='Content4_items'>
        {
          sets.map(elem=>{
            return(
              <div key={elem.id} className='Content4_items_item'>
                <img src={elem.image}/>
                <div className='Content4_items_item_desc'>
                  <h2>{elem.title}</h2>
                  <p>{elem.desc}</p>
                </div>
                <div className='Content4_items_item_buy'>
                  <p>{elem.price}$</p>
                  <button>
                    <i className="bi bi-cart"></i>
                    Into a basket
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      <Link to="/">All holiday sets</Link>
    </div>
  )
}