import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { auth, createUserProfileDocument } from 'config/firebase';

import { connect } from 'react-redux';
import { setUser, clearUser, setUserProfile } from 'store/user/actions';

import { selectUserAuth, selectCurrentUser } from 'store/user/selectors';
import { createStructuredSelector } from 'reselect';

import { Header, Footer } from 'components/layout';
import { Main, Shop, Auth, Checkout } from 'components/pages';
import { ScrollToTop, Loader } from 'components/app/shared';

const App = ({ setUser, clearUser, setUserProfile, userAuth, userProfile }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapShot) => {
          setUserProfile({ id: snapShot.id, ...snapShot.data() });
        });
      } else clearUser();
    });
    return () => {
      unsubscribe();
    };
  }, [setUser, clearUser, setUserProfile]);

  return (
    <Router>
      <ScrollToTop />
      {userAuth === null || userProfile === null ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/auth'
              render={() => (userAuth ? <Redirect to='/' /> : <Auth />)}
            />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  userAuth: selectUserAuth,
  userProfile: selectCurrentUser,
});

const mapDispatchToProps = { setUser, clearUser, setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(App);
