import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem, openCart } from 'store/cart/actions';
import { selectCollectionItem } from 'store/shop/selectors';
import StarRatingComponent from 'react-star-rating-component';
import { Button, Spinner } from 'components/app/shared';
import Gallery from 'components/app/shop/Gallery';

const CollectionItem = ({ item, match, addItem, openCart, isFetching }) => {
  return (
    <div>
      {!item || isFetching ? (
        <Spinner />
      ) : (
        <>
          {' '}
          <p className='collectionItem__navigation'>
            <Link to='/shop'>
              <span>Shop</span>
            </Link>
            <span> &#8594; </span>
            <Link to={`/shop/${match.params.collectionId}`}>
              <span>{match.params.collectionId}</span>
            </Link>
          </p>
          <div className='collectionItem-details'>
            <div className='collectionItem-details-left'>
              <Gallery item={item} />
            </div>
            <div className='collectionItem-details-right'>
              <small>{match.params.collectionId.toUpperCase()}</small>
              <h2>{item.name}</h2>
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={item.rating}
                className='rating'
              />
              <div className='collectionItem-details-right__price'>
                <p>${item.price} USD</p>
              </div>
              <div className='collectionItem-details-right__desc'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  itaque quos ducimus, doloribus illo adipisci, beatae possimus
                  numquam delectus maxime praesentium neque libero. Non
                  laboriosam sint, iusto dolorum repellat molestiae dolor minus
                  deleniti asperiores illo. Doloremque eum, perspiciatis odio
                  officia animi nostrum quis ratione excepturi! Facilis facere
                  velit deserunt beatae iusto aliquid itaque saepe dolore?
                </p>
              </div>
              <Button
                type='button'
                title='Add to Cart'
                onClick={() => {
                  addItem({ ...item, collection: match.params.collectionId });
                  openCart();
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectCollectionItem(
    ownProps.match.params.itemId,
    ownProps.match.params.collectionId
  )(state),
  isFetching: state.shop.isFetching,
});

const mapDispatchToProps = {
  addItem,
  openCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
