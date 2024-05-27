import React from 'react'
import "./Delivery.scss"

export default function Delivery() {
  return (
    <div className='Delivery'>
      <div className='Delivery_content1'>
        <div className='left_side'>
          <img src="/Images/Delivery_images/Bicycle.png" className='bicycle'/>
          <img src="/Images/Delivery_images/wheel1.png" className='wheel1'/>
          <img src="/Images/Delivery_images/wheel2.png" className='wheel2'/>
          <img src="/Images/Delivery_images/Leaf.png" className='leaf'/>
          <div className='ellipse1'></div>
          <div className='ellipse2'></div>
        </div>
        <div className='right_side'>
          <h1>Delivery and payment</h1>
          <p>There are 2 delivery methods available for our customers: <span>courier delivery</span> in St. Petersburg within the ring road and <span>pickup</span></p>
          <h4>Courier delivery</h4>
          <p>Couriers work every day from 11 a.m. to 9 p.m. Pasta delivery is carried out only in St. Petersburg within the ring road (ring road). The exact delivery area</p>
          <p>If you are ready to accept an order in the interval from 12 to 17 o&apos;clock or from 17 to 21 o&apos;clock, then delivery will cost 3$</p>
          <p>When ordering from 30$, delivery is FREE</p>
          <p>If you place an order before 15 o&apos;clock, delivery on the same day is possible between 17 and 21 o&apos;clock</p>
          <p>The courier will notify you of his arrival in 30-40 minutes</p>
        </div>
      </div>
      <div className='Delivery_content2'>
        <div className='left_side'>
          <h4>Pickup</h4>
          <p>You can place an order and pick it up yourself from our production at the address: Marshal Tukhachevsky str. 22 Business center &apos;Sova&apos;</p>
          <p>The order must be made before 20 o&apos;clock in order to pick it up the next day at the pick-up point at any convenient time between 13 and 22 o&apos;clock</p>
          <p>You can pay for the order with a bank card in advance at checkout. You cannot pay with a bank card directly upon receipt</p>
          <h4>Payment</h4>
          <p>You can pay for the order upon receipt in cash or pay for the order in advance with a bank card. To do this, specify the selected method when placing an order</p>
          <p>Payment by bank card is convenient if you want to send desserts as a gift or do not want to bother with cash upon receipt of the order</p>
          <p>If you do not have a Russian bank card, we can accept payment via PayPal</p>
        </div>
        <div className='right_side'>
          <img src="/Images/Delivery_images/Geo.png" className='geo'/>
          <img src="/Images/Delivery_images/Cookie.png" className='cookie'/>
          <img src="/Images/Delivery_images/PieceOfCookie.png" className='pieceOfCookie'/>
        </div>
      </div>
      <div className='Delivery_content3'>
        <img src="/Images/Delivery_images/map.png"/>
      </div>
    </div>
  )
}
