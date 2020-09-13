import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from 'store/cart/actions';

const CartDropdownItem = ({ cartItem, removeItem }) => {
  return (
    <div className='cartDropdownItem'>
      <img src={cartItem.imageUrl} alt='item' />
      <div className='cartDropdownItem__details'>
        <span className='cartDropdownItem__details-name'>{cartItem.name}</span>
        <span className='cartDropdownItem__details-price'>
          {cartItem.quantity} x ${cartItem.price}
        </span>
        <button onClick={() => removeItem(cartItem)}>Remove</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeItem,
};

export default connect(null, mapDispatchToProps)(CartDropdownItem);
