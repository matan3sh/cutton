import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from 'store/shop/actions';

import CollectionList from 'components/pages/shop/collection-preview/CollectionList';
import Collection from './collection/Collection';

const Shop = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className='wrapper'>
      <Route exact path={`${match.path}`} component={CollectionList} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchCollectionsStartAsync,
};

export default connect(null, mapDispatchToProps)(Shop);
