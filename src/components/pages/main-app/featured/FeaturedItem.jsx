import React from 'react';

const FeaturedItem = ({ feature }) => {
  return (
    <div className='featured__product'>
      <div className='featured__box'>
        <div className='featured__new'>NEW</div>
        <img src={feature.image} alt='' className='featured__img' />
      </div>

      <div className='featured__data'>
        <h3 className='featured__name'>{feature.name}</h3>
        <div className='featured__price'>${feature.price}</div>
      </div>
    </div>
  );
};

export default FeaturedItem;
