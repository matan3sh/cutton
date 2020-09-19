import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from 'config/firebase';

import { connect } from 'react-redux';
import { loadCollections } from 'store/shop/actions';

import CollectionList from 'components/pages/shop/collection-preview/CollectionList';
import Collection from './collection/Collection';

const Shop = ({ match, loadCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      loadCollections(collectionMap);
    });
    return () => {
      unsubscribe();
    };
  }, [loadCollections]);

  return (
    <div className='wrapper'>
      <Route exact path={`${match.path}`} component={CollectionList} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = {
  loadCollections,
};

export default connect(null, mapDispatchToProps)(Shop);
