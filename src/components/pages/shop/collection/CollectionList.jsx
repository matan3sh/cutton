import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from 'store/shop/selectors';

import { Loader } from 'components/app/shared';
import CollectionItem from 'components/pages/shop/collection-preview/CollectionItem';

const CollectionList = ({ collection }) => {
  return (
    <div className='collection'>
      {!collection ? (
        <Loader />
      ) : (
        <>
          {' '}
          <h2 className='collection__title'>{collection.title}</h2>
          <div className='collection__items'>
            {Object.keys(collection.items).map((key) => (
              <CollectionItem
                key={collection.items[key].id}
                item={collection.items[key]}
                collectionTitle={collection.title.toLowerCase()}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionList);
