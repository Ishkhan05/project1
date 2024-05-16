import React from 'react'
import Slider from 'react-slick';
import initialNewsState from '../../Constants/news';

export default function CurrentNewsSlider({id}) {
  const settings = {
    
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='CurrentNewsSlider'>
      <Slider {...settings}>
        {
          initialNewsState[id].currentNewsImages.map((elem,index)=>{
            return(
              <div key={index}>
                <img src={elem}/>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
