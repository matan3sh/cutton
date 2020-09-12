import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from 'store/cart/actions';

import { Button } from 'components/app/shared';

const CartDropdown = ({ toggleCart }) => {
  return (
    <div className='cartDropdown'>
      <span onClick={() => toggleCart()}>X</span>
      <div className='cartDropdown__items'>
        <Button title='Check Out' type='button' />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCart,
};

export default connect(null, mapDispatchToProps)(CartDropdown);
