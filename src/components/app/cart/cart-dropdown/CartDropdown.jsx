import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from 'store/cart/selectors';

import CartDropDownList from './CartDropDownList';

const CartDropdown = ({ toggleCart, cartItems }) => {
  return (
    <div className='cartDropdown'>
      <span onClick={() => toggleCart()}>X</span>
      <div className='cartDropdown__items'>
        {!cartItems?.length ? (
          <p>Your cart is empty</p>
        ) : (
          <CartDropDownList cartItems={cartItems} />
        )}
      </div>
      <Link exact to='/checkout'>
        Check Out
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
