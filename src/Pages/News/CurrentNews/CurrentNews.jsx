import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import initialNewsState from '../../../Constants/news'
import CurrentNewsSlider from '../../../Components/Slider3/CurrentNewsSlider'

export default function CurrentNews() {
  const {id} = useParams()
  const currentNews = initialNewsState[`${id-1}`] 
  
  

  return (
    <div className='CurrentNews'>
      {
        <div key={currentNews.id}>
          <img src={currentNews.image}/>
          <h2>{currentNews.title}</h2>
          <p>{currentNews.desc2}</p>
        </div>    
      }
      <CurrentNewsSlider id={id}/>
    </div>
  )
}
