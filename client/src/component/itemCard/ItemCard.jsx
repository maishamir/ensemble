import React from 'react'
import './ItemCard.scss'

function ItemCard({ image, alt }) {
  return (
      <div class="item-card">
          <img src={image} className='item-card__image' alt={alt} />
    </div>
  )
}

export default ItemCard