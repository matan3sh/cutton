import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionItem } from 'store/shop/selectors';

const CollectionItem = ({ item, match }) => {
  return (
    <div>
      <h2>{item.name}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectCollectionItem(
    ownProps.match.params.itemId,
    ownProps.match.params.collectionId
  )(state),
});

export default connect(mapStateToProps)(CollectionItem);
