import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const CollectionItem = ({ item }) => {
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
      <button>Add To Cart</button>
    </div>
  );
};

export default CollectionItem;
