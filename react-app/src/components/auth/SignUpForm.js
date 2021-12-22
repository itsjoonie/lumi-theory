import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect, useHistory } from 'react-router-dom';
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
        <div className='sign-up-auth-container'>
          <div className='signup-login-container'>
                <div className='login-banner'>
                <div className='login-banner-words'>
                  <div className='banner-words'>
                    <h1>Welcome</h1>
                    <h1>to</h1>
                    <h1>Lumi Theory</h1>
                  </div>
                </div>
              </div>
            <div className='login-container'>
              <form  className='login-form' onSubmit={onSignUp}>
                <h1>Sign Up</h1>
         
                  <div class="login-form-control">
                      <label for="first name">First Name</label>
                      <input
                        name='email'
                        type='text'
                        placeholder='first name'
                        value={firstName}
                        onChange={updateFirstName}
                      />
                      <small>{errors.email}</small>
                  </div>
                  <div class="login-form-control">
                      <label for="last name">Last Name</label>
                      <input
                        name='email'
                        type='text'
                        placeholder='last name'
                        value={lastName}
                        onChange={updateLastName}
                      />
                      <small>{errors.first_name}</small>
                  </div>
                  <div class="login-form-control">
                    <label for="email">email</label>
                    <input name='email'
                      type='email'
                      placeholder='email'
                      value={email}
                      onChange={updateEmail}/>
                    <small>{errors.password}</small>
                  </div>
                  <div class="login-form-control">
                    <label for="Lastname">Password</label>
                    <input name='password'
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={updatePassword}/>
                    <small>{errors.password}</small>
                  </div>
                  <div class="login-form-control">
                    <label for="Lastname">Confirm password</label>
                    <input name='password'
                      type='password'
                      placeholder='Password'
                      value={repeatPassword}
                      onChange={updateRepeatPassword}/>
                    <small>{errors.password}</small>
                  </div>
                  <button className='login-btn' type='submit'>Create Account</button>
                  <hr className='line-seperator' />
              </form>
            
              <div className='or-login-as'>
                <p id='or'>or</p>
              </div>
              <div className='loginLink'>Have an account? <NavLink className='have-an-account' to='/login'> log in</NavLink></div>
          </div>
        </div>
      </div>
  );
};

export default SignUpForm;
