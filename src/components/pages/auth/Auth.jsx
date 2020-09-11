import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = ({ userAuth }) => {
  const history = useHistory();

  useEffect(() => {
    if (userAuth !== null) history.push('/');
  }, [userAuth]);

  return (
    <div className='auth wrapper'>
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userAuth: state.auth.userAuth,
});

export default connect(mapStateToProps, null)(Auth);
