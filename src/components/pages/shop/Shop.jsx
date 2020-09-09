import React, { useState } from 'react';

import db from 'data/shopDB';
import CollectionList from 'components/app/shop/CollectionList';

const Shop = () => {
  const [collections, setCollections] = useState(db.getDefaultData());
  return (
    <div className='wrapper'>
      <CollectionList collections={collections} />
    </div>
  );
};

export default Shop;
