import React from 'react'
import "./Guarantees.scss"

export default function Guarantees() {
  return (
    <div className='Guarantees'>
      <h1>Guarantees of taste and quality</h1>
      <p>When making cakes, we use only natural ingredients, avoiding the use of a converter</p>
      <div className='Guarantees_items'>
        <div className="Guarantees_item">
          <img src="Images/Guarantees_images/image1.png" />
          <h4>100% almond flour</h4>
        </div>
        <div className="Guarantees_item">
          <img src="Images/Guarantees_images/image2.png" />
          <h4>100% safe food coloring</h4>
        </div>
        <div className="Guarantees_item">
          <img src="Images/Guarantees_images/image3.png" />
          <h4>100% fruit puree and natural ingredients</h4>
        </div>
      </div>
    </div>
  )
}
