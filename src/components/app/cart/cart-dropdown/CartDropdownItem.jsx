import React from 'react';

const CartDropdownItem = ({ cartItem }) => {
  return (
    <div className='cartDropdownItem'>
      <img src={cartItem.imageUrl} alt='item' />
      <div className='cartDropdownItem__details'>
        <span className='cartDropdownItem__details-name'>{cartItem.name}</span>
        <span className='cartDropdownItem__details-price'>
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartDropdownItem;
