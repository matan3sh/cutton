import React from 'react';

import new1 from '../../../../assets/img/new1.png';
import new2 from '../../../../assets/img/new2.png';
import new3 from '../../../../assets/img/new3.png';
import new4 from '../../../../assets/img/new4.png';
import new5 from '../../../../assets/img/new5.png';
import new6 from '../../../../assets/img/new6.png';
import NewList from '../../../app/main-app/new/NewList';

const products = [
  { image: new1 },
  { image: new2 },
  { image: new3 },
  { image: new4 },
  { image: new5 },
  { image: new6 },
];

const New = () => {
  return (
    <section className='new section' id='New'>
      <h2 className='section-title'>NEW ARRIVALS</h2>
      <a href='#/' className='section-all'>
        View All
      </a>
      <NewList products={products} />
    </section>
  );
};

export default New;
