import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer } from 'components/layout';
import { Main, Shop, Auth } from 'components/pages';
import { ScrollToTop } from 'components/app/shared';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/auth' component={Auth} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
