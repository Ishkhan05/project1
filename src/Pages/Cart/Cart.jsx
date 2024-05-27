import React from 'react'
import Cart_products from '../../Components/Cart_products/Cart_products'

export default function Cart() {
  return (
    <div className='Cart'>
      <h1>Your cart</h1>
      <div className='Cart__products'>
        <Cart_products/>
        <div className='offers'>

        </div>
      </div>
      <div className='Cart__delivery'>
        
      </div>
    </div>
  )
}
