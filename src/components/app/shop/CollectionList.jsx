import React from 'react';
import CollectionItem from '../shop/CollectionItem';

const CollectionList = ({ collections }) => {
  return (
    <div className='collectionList'>
      {collections?.map((collection) => (
        <div key={collection.id}>
          <h1 className='collectionList__title'>{collection.title}</h1>
          <div className='collectionList__preview'>
            {collection.items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
