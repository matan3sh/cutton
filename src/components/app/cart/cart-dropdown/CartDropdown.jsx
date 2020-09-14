import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/cart/selectors';

import CartDropDownList from './CartDropDownList';

const CartDropdown = ({ toggleCart, cartItems, total }) => {
  return (
    <div className='cartDropdown'>
      <div className='cartDropdown__header'>
        <span onClick={() => toggleCart()}>X</span>
        <span className='cartDropdown__header-total'>
          <span>TOTAL:</span> ${total}
        </span>
      </div>
      <div className='cartDropdown__items'>
        {!cartItems?.length ? (
          <p>Your cart is empty</p>
        ) : (
          <CartDropDownList cartItems={cartItems} />
        )}
      </div>
      <Link to='/checkout'>Check Out</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
