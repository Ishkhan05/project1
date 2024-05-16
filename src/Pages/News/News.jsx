import React from 'react'
import initialNewsState from '../../Constants/news'
import { Link } from 'react-router-dom'
import "./News.scss"

export default function News() {
  return (
    <>
      <div className='News'>
        <h1>News</h1>
        <div className='News_content'>
          {
            initialNewsState.map(elem=>{
              return(
                <Link key={elem.id} to={`${elem.id}`}>
                  <img src={elem.image}/>
                  <div className='item_info'>
                    <p>{elem.date}</p>
                    <h3>{elem.title}</h3>
                    <p>{elem.desc}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
