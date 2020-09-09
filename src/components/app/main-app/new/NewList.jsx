import React from 'react';
import NewItem from './NewItem';

const NewList = ({ products }) => {
  return (
    <div className='new__container bd-grid'>
      {products.map((product, index) => (
        <NewItem key={index} product={product} />
      ))}
    </div>
  );
};

export default NewList;
