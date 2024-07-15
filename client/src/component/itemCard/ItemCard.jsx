import React from 'react'
import './ItemCard.scss'

function ItemCard({ image, alt, name, onClick }) {
  return (
      <div className="item-card">
      <img src={image} className='item-card__image' alt={alt} onClick={onClick} />
    </div>
  )
}

export default ItemCard