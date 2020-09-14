import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/cart/selectors';

import { CartCheckoutList } from 'components/app/cart';

const Checkout = ({ cartItems, total, closeCart }) => {
  useEffect(() => {
    closeCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='checkout'>
      {!cartItems?.length ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className='content-table'>
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
          </table>
          <div className='checkout__total'>
            <span>TOTAL: ${total}</span>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {
  closeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
