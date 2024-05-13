import React from 'react'
import "./Start.scss"

export default function Start() {
  return (
    <div className='Start'>
      <div className='ellipses'>
        {
          new Array(7).fill().map((_,index)=>{
            return <div className={`ellipse${index + 1}`} key={index}></div>
          })
        }
      </div>
      <div className='Start_content'>
        <div className='Start_content-images'>
          {
            new Array(13).fill().map((_, index) => {
              return <img src={`Images/Start_images/layer-${index + 1}.png`} key={index}/>
            })
          }
        </div>
        <div className='Start_content-title'>
          <img src="Images/Start_images/layer-0.png" />
          <h1>TRUE LOVE</h1>
          <p>Macaroni cakes and other desserts made from natural ingredients, cooked with love</p>
        </div>
      </div>
    </div>
  )
}
