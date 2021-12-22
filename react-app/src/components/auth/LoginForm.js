import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import Modal from '../Modal/Modal';
import './auth.css'
import SignUpForm from './SignUpForm';



const LoginForm = () => {

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const history = useHistory();


  const demoLogin = () => {
        dispatch(login('demo@aa.io', 'password'));
        history.push('/')

    };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-container'>
      
        <div className='login-signup-container'>
          <div className='login-banner'>
            <div className='login-banner-words'>
              <div className='banner-words'>
                <div>
                  <h1>Welcome back</h1>
                  <h1>to</h1>
                  <h1>Lumi Theory</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='login-container'>
              <form  className='login-form' onSubmit={onLogin}>
                <h1>Login</h1>
         
                  <div class="login-form-control">
                      <label for="username">Email</label>
                      <i class="far fa-envelope"></i>
                      <input
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={updateEmail}
                      />
                      <small className='errors'>{errors.email}</small>
                  </div>
                  <div class="login-form-control">
                    <label for="password">password</label>
                    <i class="fas fa-unlock-alt"></i>
                    <input name='password'
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={updatePassword}/>
                    <small className='errors'>{errors.password}</small>
                  </div>
                  <button className='login-btn' type='submit'>Log in</button>
                  <hr className='line-seperator' />
              </form>
            
              <div className='or-login-as'>
                <p id='or'>or</p>
                <p  className='demo' onClick={demoLogin}> log in as <span>demo user</span></p>
              </div>
              <div className='noAccount'>Don't have an account? <NavLink className='no-account-signup' to='/signup'> Sign up</NavLink></div>
          </div>
         
      
        </div>
    </div>
  );
};

export default LoginForm;
