import React from 'react';

import Home from './sections/Home';
import Collection from './sections/Collection';
import Featured from './sections/Featured';
import Offer from './sections/Offer';
import New from './sections/New';
import NewsLetter from './sections/NewsLetter';
import Sponsers from './sections/Sponsers';

const App = () => {
  return (
    <>
      <Home />
      <Collection />
      <Featured />
      <Offer />
      <New />
      <NewsLetter />
      <Sponsers />
    </>
  );
};

export default App;
