import React from 'react';
import FeaturedItem from './FeaturedItem';

const FeaturedList = ({ features }) => {
  return (
    <div className='featured__container bd-grid'>
      {features.map((feature, index) => (
        <FeaturedItem key={feature.image} feature={feature} />
      ))}
    </div>
  );
};

export default FeaturedList;
