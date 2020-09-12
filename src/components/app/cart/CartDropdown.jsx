import React from 'react';
import { Button } from 'components/app/shared';

const CartDropdown = () => {
  return (
    <div className='cartDropdown'>
      <div className='cartDropdown__items'>
        <Button title='Check Out' type='button' />
      </div>
    </div>
  );
};

export default CartDropdown;
