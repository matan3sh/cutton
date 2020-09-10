import React, { useState } from 'react';
import { FormInput, Button } from '../../app/shared';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
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
          <Button title='Sign In With Google' />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
