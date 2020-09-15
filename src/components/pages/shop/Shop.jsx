import React from 'react';
import { Route } from 'react-router-dom';

import CollectionList from 'components/pages/shop/collection-preview/CollectionList';
import Collection from './collection/Collection';

const Shop = ({ match }) => {
  return (
    <div className='wrapper'>
      <Route exact path={`${match.path}`} component={CollectionList} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
