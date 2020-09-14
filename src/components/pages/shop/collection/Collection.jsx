import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from 'store/shop/selectors';

import CollectionItem from 'components/app/shop/CollectionItem';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection'>
      <h2 className='collection__title'>{title}</h2>
      <div className='collection__items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
