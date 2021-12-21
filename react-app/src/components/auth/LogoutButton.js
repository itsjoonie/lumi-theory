import React, {useSelector} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()


  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/login')
  };

  return (
    <div className='logout-btn-container'>
      <button className='logout-btn' onClick={onLogout} title='log out' >
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};

export default LogoutButton;
