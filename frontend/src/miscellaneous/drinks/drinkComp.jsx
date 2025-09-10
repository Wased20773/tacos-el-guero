import React from 'react'

const DrinkComp = ( {item} ) => {
  return (
    <div className="menu-modal-drink-container">
      <img 
        src={item.img}
        className="menu-modal-drink-image"
        alt="coke drink"
        width={"400px"}
      />
      <div className="menu-modal-drink-info">
        <div className="menu-modal-drink-text-spacing">
          <div className="menu-modal-drink-name">{item.name}</div>
          <div className="menu-modal-drink-description">{item.description}</div>
        </div>
        <div className="menu-modal-drink-price">{item.price}</div>
      </div>
    </div>
  )
}

export default DrinkComp