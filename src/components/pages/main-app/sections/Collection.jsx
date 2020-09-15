import React from 'react';

import CollectionList from 'components/pages/main-app/collection/CollectionList';

import backpackMan from 'assets/img/backpackMan.png';
import backpackWoman from 'assets/img/backpackWoman.png';

const collections = [
  {
    name: 'Men',
    type: 'Backpack',
    image: backpackMan,
  },
  {
    name: 'Woman',
    type: 'Backpack',
    image: backpackWoman,
  },
];

const Collection = () => {
  return (
    <section className='collection section'>
      <CollectionList collections={collections} />
    </section>
  );
};

export default Collection;
