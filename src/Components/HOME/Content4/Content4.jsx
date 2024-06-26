import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../../../features/PopularSets/popularSetsSlice'
import "./Content4.scss"
import { Link } from 'react-router-dom'
import { addProduct} from '../../../features/Products/productsSlice'

export default function Content4({title, button}) {
  const sets = useSelector(getAllItems)
  const dispatch = useDispatch()
  return (
    <div className='Content4'>
      <h1>{title}</h1>
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
                  <button onClick={()=>dispatch(addProduct(elem))}>
                    <i className="bi bi-cart"></i>
                    Into a basket
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      <Link to="/">{button}</Link>
    </div>
  )
}
