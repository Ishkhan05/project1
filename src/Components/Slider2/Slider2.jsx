import React from 'react'
import Slider from 'react-slick'
import initialNewsState from '../../Constants/news'
import "./Slider2.scss"

export default function Slider2() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <div className='Slider2'>
      <Slider {...settings}>
        {
          initialNewsState.map(elem=>{
            return(
              <div key={elem.id}>
                <img src={elem.image}/>
                <div className='item_info'>
                  <p>{elem.date}</p>
                  <h3>{elem.title}</h3>
                  <p>{elem.desc}</p>
                </div>
              </div>
            )
          }) 
        }
      </Slider>      
    </div>
  )
}
