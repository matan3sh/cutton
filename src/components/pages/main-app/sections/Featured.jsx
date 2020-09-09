import React from 'react';

import FeaturedList from '../../../app/main-app/featured/FeaturedList';

import feature1 from '../../../../assets/img/feature1.png';
import feature2 from '../../../../assets/img/feature2.png';
import feature3 from '../../../../assets/img/feature3.png';
import feature4 from '../../../../assets/img/feature4.png';

const features = [
  {
    name: 'Headphone One Black',
    price: '29',
    image: feature1,
  },
  {
    name: 'Speaker Beats',
    price: '39',
    image: feature2,
  },
  {
    name: 'Apple Airpods',
    price: '129',
    image: feature3,
  },
  {
    name: 'Smartwatch F9 Black',
    price: '99',
    image: feature4,
  },
];

const Featured = () => {
  return (
    <section className='featured section' id='Featured'>
      <h2 className='section-title'>FEATURED PRODUCTS</h2>
      <a href='#/' className='section-all'>
        View All
      </a>
      <FeaturedList features={features} />
    </section>
  );
};

export default Featured;
