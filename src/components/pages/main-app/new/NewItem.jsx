import React from 'react';

const NewItem = ({ product }) => {
  return (
    <div className='new__box'>
      <img src={product.image} alt='' className='new__img' />
      <div className='new__link'>
        <a href='#/' className='button'>
          VIEW PRODUCT
        </a>
      </div>
    </div>
  );
};

export default NewItem;
