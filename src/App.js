import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/layout/Header';

import { Main, Shop } from 'components/pages';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
