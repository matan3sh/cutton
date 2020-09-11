import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'store/user/actions';
import { FormInput, Button } from '../../app/shared';

const SignUp = ({ signUp }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passowrd Dont Match!');
      return;
    }
    await signUp(fullName, email, password);
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='signUp'>
      <h2>I Don't have an Account</h2>
      <h5>Sign up with your details</h5>
      <form className='signUp__form' onSubmit={onSubmit}>
        <FormInput
          label='Full Name'
          value={fullName}
          type='text'
          handleChange={(e) => setFullName(e.target.value)}
        />
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
        <FormInput
          label='Confirm Password'
          value={confirmPassword}
          type='password'
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className='signUp__buttons'>
          <Button type='submit' title='Sign Up' />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(SignUp);
