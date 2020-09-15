import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem, openCart } from 'store/cart/actions';
import StarRatingComponent from 'react-star-rating-component';

const CollectionItem = ({ collectionTitle, item, addItem, openCart }) => {
  return (
    <div className='collectionItem'>
      <Link to={`/shop/${collectionTitle}/${item.id}`}>
        <img src={item.imageUrl} alt='product-thumb' />
        <h3>{item.name}</h3>
        <StarRatingComponent
          name='rate1'
          starCount={5}
          value={item.rating}
          className='rating'
        />
        <p>${item.price}</p>
      </Link>
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
