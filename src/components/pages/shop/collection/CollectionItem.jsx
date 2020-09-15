import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionItem } from 'store/shop/selectors';
import { Button } from 'components/app/shared';

const CollectionItem = ({ item, match }) => {
  console.log(match);
  return (
    <div className='collectionItem-details'>
      <div className='collectionItem-details-left'>
        <div className='collectionItem-details-left__mainImage'>
          <img src={item.imageUrl} alt='' />
        </div>
        <div className='collectionItem-details-left__images'>
          <img src={item.imageUrl} alt='' />
          <img src={item.imageUrl} alt='' />
          <img src={item.imageUrl} alt='' />
        </div>
      </div>
      <div className='collectionItem-details-right'>
        <small>{match.params.collectionId.toUpperCase()}</small>
        <h2>{item.name}</h2>
        <div className='collectionItem-details-right__price'>
          <p>${item.price} USD</p>
        </div>
        <div className='collectionItem-details-right__desc'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            itaque quos ducimus, doloribus illo adipisci, beatae possimus
            numquam delectus maxime praesentium neque libero. Non laboriosam
            sint, iusto dolorum repellat molestiae dolor minus deleniti
            asperiores illo. Doloremque eum, perspiciatis odio officia animi
            nostrum quis ratione excepturi! Facilis facere velit deserunt beatae
            iusto aliquid itaque saepe dolore?
          </p>
        </div>
        <Button type='button' title='Add to Cart' />
      </div>
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
