import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'store/user/actions';
import { FormInput, Button } from 'components/app/shared';
import { signInWithGoogle } from 'config/firebase';

const SignIn = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='signIn'>
      <h2>I Already have an Account</h2>
      <h5>Sign in with your email and password</h5>
      <form className='signIn__form' onSubmit={onSubmit}>
        <FormInput
          label='Email'
          value={email}
          type='email'
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label='Password'
          value={password}
          type='password'
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className='signIn__buttons'>
          <Button type='submit' title='Sign In' />
          <Button onClick={signInWithGoogle} title='Sign In With Google' />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(SignIn);
