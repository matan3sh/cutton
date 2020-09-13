import React from 'react';
import CartDropdownItem from './CartDropdownItem';

const CartDropDownList = ({ cartItems }) => {
  return (
    <div className='cartDropDownList'>
      {cartItems.map((cartItem) => (
        <CartDropdownItem key={cartItems.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartDropDownList;
