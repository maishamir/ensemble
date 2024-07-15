import React from 'react'
import './ItemCard.scss'

function ItemCard({ image, alt, name, onClick }) {
  return (
      <div className="item-card">
      <img src={image} className='item-card__image' alt={alt} onClick={onClick} />
      <div className="item-card__container">
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default ItemCard