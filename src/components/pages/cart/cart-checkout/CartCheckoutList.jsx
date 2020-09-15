import React from 'react';

import CartCheckoutItem from './CartCheckoutItem';

const CartCheckoutList = ({ cartItems }) => {
  return (
    <tbody>
      {cartItems.map((item) => (
        <CartCheckoutItem key={item.id} item={item} />
      ))}
    </tbody>
  );
};

export default CartCheckoutList;
