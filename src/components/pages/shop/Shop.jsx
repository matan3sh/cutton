import React, { useState } from 'react';
import CollectionList from 'components/app/shop/CollectionList';

import db from 'data/shopDB';

const Shop = () => {
  // eslint-disable-next-line
  const [collections, setCollections] = useState(db.getDefaultData());
  return (
    <div className='wrapper'>
      <CollectionList collections={collections} />
    </div>
  );
};

export default Shop;
