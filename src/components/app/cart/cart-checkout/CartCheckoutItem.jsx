import React from 'react';
import { connect } from 'react-redux';
import { addItem } from 'store/cart/actions';

const CartCheckoutItem = ({ item, addItem }) => {
  return (
    <tr>
      <td>
        <div className='image-container'>
          <img src={item.imageUrl} alt='item' />
        </div>
      </td>
      <td>
        <span className='name'>{item.name}</span>
      </td>
      <td>
        <span className='quantity'>{item.quantity}</span>
      </td>
      <td>
        <span className='price'>$ {item.price}</span>
      </td>
      <td>
        <div className='action-button'>&#10005;</div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CartCheckoutItem);
