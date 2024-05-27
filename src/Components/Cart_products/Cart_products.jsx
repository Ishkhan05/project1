import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, getProduct, handleRemoveAll, handleRemoveItem, minusCount } from '../../features/Products/productsSlice'
import "./Cart_products.scss"


export default function Cart_products() {
  const products = useSelector(getProduct)
  const dispatch = useDispatch()
  return (
    <div className='Cart_products'>
      {
        products.map(elem=>{
          return(
            <div key={elem.id} className='product'>
              <div className='product__content'>
                <img src={elem.image}/>
                <h3>{elem.title}</h3>
                <div className='product__content-count'>
                  <button onClick={()=>dispatch(minusCount(elem.id))}>-</button>
                  <h4 >{elem.count}</h4>
                  <button onClick={()=>dispatch(addCount(elem.id))}>+</button>
                </div>
                <p>Price: <span>${elem.price * elem.count}</span></p>
              </div>
              <i className="bi bi-x-lg" onClick={()=>dispatch(handleRemoveItem(elem.id))}></i>
            </div>  
          )
        })
      }
      {products.length>0 ? <button className='Clear_btn' onClick={()=>dispatch(handleRemoveAll())}>Clear Cart</button> :null}
    </div>
  )
}
