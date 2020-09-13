import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/cart/selectors';

import { CartCheckoutList } from 'components/app/cart';

const Checkout = ({ cartItems, total, toggleCart }) => {
  useEffect(() => {
    toggleCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='checkout'>
      {!cartItems?.length ? (
        <p>Your cart is empty</p>
      ) : (
        <table class='content-table'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <CartCheckoutList cartItems={cartItems} />
          <div className='checkout__total'>
            <span>TOTAL: ${total}</span>
          </div>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
