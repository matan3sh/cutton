import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from 'store/shop/selectors';

import CollectionList from 'components/app/shop/CollectionList';

const Shop = ({ collections }) => {
  return (
    <div className='wrapper'>
      <CollectionList collections={collections} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps, null)(Shop);
