import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionList = ({ collections }) => {
  return (
    <div className='collection__container bd-grid'>
      {collections.map((collection, index) => (
        <CollectionItem key={index} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionList;
