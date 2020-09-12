import React from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  return (
    <div className='auth wrapper'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
