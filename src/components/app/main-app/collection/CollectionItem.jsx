import React from 'react';
import { Link } from 'react-router-dom';

const CollectionItem = ({ collection }) => {
  return (
    <div className='collection__box'>
      <img src={collection.image} alt='' className='collection__img' />
      <div className='collection__data'>
        <h2 className='collection__title'>
          <span className='collection__subtitle'>{collection.name}</span>
          <br />
          {collection.type}
        </h2>
        <Link to='/shop/backpack' className='collection__view'>
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default CollectionItem;
