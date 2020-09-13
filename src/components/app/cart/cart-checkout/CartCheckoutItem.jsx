import React from 'react';
import { connect } from 'react-redux';
import { addItem } from 'store/cart/actions';

const CartCheckoutItem = ({ item, addItem }) => {
  return (
    <div className='checkout__item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>{item.quantity}</span>
      <span className='price'>$ {item.price}</span>
      <div className='action-button'>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CartCheckoutItem);
