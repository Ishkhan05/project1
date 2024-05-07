import React from 'react'
import Slider from "react-slick";
import initialSliderState from '../../Constants/slider';
import "./Slider1.scss"

export default function Slider1() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <div className='Slider1'>
      <Slider {...settings}>
        {
          initialSliderState.map(elem=>{
            return(
              <div key={elem.id}>
                <h4 style={{backgroundColor: `${elem.color}`}}>{elem.title}</h4>
                <img src={elem.image}/>
                <div style={{backgroundColor: `${elem.color}`}}>
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
