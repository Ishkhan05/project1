import React from 'react'
import "./Contacts.scss"
export default function Contacts() {
  return (
    <div className='Contacts'>
      <img src="/Images/Contacts_image/Contacts.png"/>
      <div className='Contacts_content'>
        <h1>Contacts</h1>
        <div className='Contacts__content1'>
          <h3>Production</h3>
          <p>Marshal Tukhachevsky, 22</p>
          <p>Opening hours: from 8 to 19:30.</p>
        </div>
        <div className='Contacts__content2'>
          <h3>Pick-up points</h3>
          <p>Cafe MOROSHKA Marshal Tukhachevsky, 22 (from 8 to 19:30)</p>
          <p>Cafe MYATA 37 Griboyedov Canal Embankment (from 10 to 22)</p>
        </div>
        <div className='Contacts__content3'>
          <h3>Phones</h3>
          <p>8 (812) 309-82-88 main number</p>
          <p>8 (981) 841-85-25 for complaints and suggestions</p>
        </div>
      </div>
    </div>
  )
}
