import React from 'react'
import Start from '../../Components/HOME/Start/Start'
import Content2 from '../../Components/HOME/Content2/Content2'
import Content3 from '../../Components/HOME/Content3/Content3'
import Content4 from '../../Components/HOME/Content4/Content4'
import Content5 from '../../Components/HOME/Content5/Content5'
import Content6 from '../../Components/HOME/Content6/Content6'

export default function Home() {
  
  return (
    <div>
      <Start />
      <Content2 />
      <Content3 />
      <Content4 title={"Popular sets"} button={"All holiday sets"}/>
      <Content5 />
      <Content6 />
    </div>
  )
}
