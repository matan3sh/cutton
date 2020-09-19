import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from 'store/shop/selectors';

import CollectionItem from './CollectionItem';

const CollectionList = ({ collections }) => {
  return (
    <div className='collectionList'>
      {collections?.map((collection) => (
        <div key={collection.id}>
          <Link to={`shop/${collection.title.toLowerCase()}`}>
            <h1 className='collectionList__title'>{collection.title}</h1>
          </Link>
          <div className='collectionList__preview'>
            {Object.keys(collection.items).map((key) => (
              <CollectionItem
                key={collection.items[key].id}
                item={collection.items[key]}
                collectionTitle={collection.title.toLowerCase()}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, null)(CollectionList);
