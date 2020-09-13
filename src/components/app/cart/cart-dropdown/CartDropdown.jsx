import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from 'store/cart/actions';

import { Button } from 'components/app/shared';
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
      <Button title='Check Out' type='button' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
