import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
            <div class="login-form-control">
                <label for="firstname">First Name</label>
                <input
                  type='text'
                  placeholder='first name'
                  value={firstName}
                  onChange={updateFirstName}
                />
                <small>{errors.email}</small>
		        </div>
            <div class="login-form-control">
                <label for="lastname">First Name</label>
                <input
                  type='text'
                  placeholder='last name'
                  value={lastName}
                  onChange={updateLastName}
                />
                <small>{errors.email}</small>
		        </div>
            <div class="login-form-control">
                <label for="email">Email</label>
                <input
                  name='email'
                  type='text'
                  placeholder='email name'
                  value={email}
                  onChange={updateEmail}
                />
                <small>{errors.email}</small>
		        </div>
            <div class="login-form-control">
              <label for="username">Password</label>
              <input name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}/>
              <small>{errors.password}</small>
            </div>
            <div class="login-form-control">
              <label for="username">Confirm Password</label>
              <input name='password'
                type='password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                />
              <small>{errors.password}</small>
            </div>
            <button className='login-btn' type='submit'>Signup</button>
        </div>
    </form>
  );
};

export default SignUpForm;
