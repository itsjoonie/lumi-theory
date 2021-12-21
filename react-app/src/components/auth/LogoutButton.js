import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div className='logout-btn-container'>
      <a className='logout-btn' onClick={onLogout} href='/#'>
        <i className="fas fa-sign-out-alt"></i>
        <div className='logout'>
        Logout
        </div>
      </a>
    </div>
  );
};

export default LogoutButton;
