import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeCompleteItem, removeItem } from 'store/cart/actions';

const CartCheckoutItem = ({
  item,
  addItem,
  removeCompleteItem,
  removeItem,
}) => {
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
        <span className='quantity'>
          <span className='quantity__sign' onClick={() => removeItem(item)}>
            &#8595;
          </span>
          <span className='quantity__number'>{item.quantity}</span>
          <span className='quantity__sign' onClick={() => addItem(item)}>
            &#8593;
          </span>
        </span>
      </td>
      <td>
        <span className='price'>$ {item.price}</span>
      </td>
      <td>
        <div className='action-button' onClick={() => removeCompleteItem(item)}>
          &#10005;
        </div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  addItem,
  removeCompleteItem,
  removeItem,
};

export default connect(null, mapDispatchToProps)(CartCheckoutItem);
