import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, email, password));
      if (data) {
        console.log(data, "HRLLLLOOOOOOOOOOOOO")
        setErrors(data)
      }
    }  else if (password !== repeatPassword) {
        setErrors({passMatch: 'Passwords do not match.'})
      
    }
  };


  const updateFirstName = (e) => {
    setFirst_name(e.target.value);
  };
  const updateLastName = (e) => {
    setLast_name(e.target.value);
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
                    <div>
                    <h1>Welcome</h1>
                    <h1>to</h1>
                    <h1>Lumi Theory</h1>
                    </div>
                  </div>
                </div>
              </div>
            <div className='login-container'>
              <form  className='login-form' onSubmit={onSignUp}>
                <h1>Sign Up</h1>
                  <div class="login-form-control">
                      <label for="first name">First Name</label>
                      <i className="far fa-user-circle"></i>
                      <input
                        name='email'
                        type='text'
                        placeholder='first name'
                        value={first_name}
                        onChange={updateFirstName}
                      />
                      {errors.first_name ? <small className='errors'>{errors.first_name} </small> : null }
                  </div>
                  <div class="login-form-control">
                      <label for="last name">Last Name</label>
                      <i className="far fa-user-circle"></i>
                      <input
                        name='last name'
                        type='text'
                        placeholder='last name'
                        value={last_name}
                        onChange={updateLastName}
                      />
                      {errors.last_name ? <small className='errors'>{errors.last_name} </small> : null }
                  </div>
                  <div class="login-form-control">
                    <label for="email">Email</label>
                    <i class="far fa-envelope"></i>
                    <input name='email'
                      type='email'
                      placeholder='email'
                      value={email}
                      onChange={updateEmail}/>
                    {errors.email ? <small className='errors'>{errors.email} </small> : null }
                  </div>
                  <div class="login-form-control">
                    <label for="Lastname">password</label>
                    <i class="fas fa-unlock-alt"></i>
                    <input name='password'
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={updatePassword}/>
                      <small className='errors'>{errors.password ? <p>{errors.password} </p> : null }</small>
                    {/*  */}
                  </div>
                  <div class="login-form-control">
                    <label for="Lastname">Confirm Password</label>
                    <i class="fas fa-unlock-alt"></i>
                    <input name='password'
                      type='password'
                      placeholder='Password'
                      value={repeatPassword}
                      onChange={updateRepeatPassword}/>
                    <small className='errors'>{errors.passMatch? <p>{errors.passMatch} </p> : null }</small>
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
