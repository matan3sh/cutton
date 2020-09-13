import React from 'react';
import { connect } from 'react-redux';
import { addItem, openCart } from 'store/cart/actions';
import StarRatingComponent from 'react-star-rating-component';

const CollectionItem = ({ item, addItem, openCart }) => {
  return (
    <div className='collectionItem'>
      <div>
        <img src={item.imageUrl} alt='product-thumb' />
        <h3>{item.name}</h3>
        <StarRatingComponent
          name='rate1'
          starCount={5}
          value={item.rating}
          className='rating'
        />
        <p>${item.price}</p>
      </div>
      <button
        onClick={() => {
          addItem(item);
          openCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
  openCart,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
