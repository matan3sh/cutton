import React from 'react';
import { Route } from 'react-router-dom';

import CollectionList from './CollectionList';
import CollectionItem from './CollectionItem';

const Collection = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionList} />
      <Route path={`${match.path}/:itemId`} component={CollectionItem} />
    </div>
  );
};

export default Collection;
