import React from 'react';
import CartCheckoutItem from './CartCheckoutItem';

const CartCheckoutList = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <CartCheckoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartCheckoutList;
