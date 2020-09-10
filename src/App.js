import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer } from 'components/layout';
import { Main, Shop } from 'components/pages';
import { ScrollToTop } from 'components/app/shared';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
