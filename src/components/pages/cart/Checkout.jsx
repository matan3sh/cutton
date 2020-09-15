import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/cart/selectors';

import CartCheckoutList from './cart-checkout/CartCheckoutList';
import StripeButton from 'components/app/shared/StripeButton';

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
            <StripeButton price={total} />
            <span>TOTAL: ${total}</span>
          </div>
          <div className='test__payment'>
            <p>For testing payment use:</p>
            <small>4242 4242 4242 4242 - Exp:01/21 - CW:123</small>
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
