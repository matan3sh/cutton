import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from 'config/firebase';

import { connect } from 'react-redux';
import { setUser, clearUser } from 'store/user/actions';

import { Header, Footer } from 'components/layout';
import { Main, Shop, Auth } from 'components/pages';
import { ScrollToTop } from 'components/app/shared';

const App = ({ setUser, clearUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        createUserProfileDocument(authUser);
      } else clearUser();
    });
    return () => unsubscribe();
  }, [setUser, clearUser]);

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
};

const mapDispatchToProps = { setUser, clearUser };

export default connect(null, mapDispatchToProps)(App);
