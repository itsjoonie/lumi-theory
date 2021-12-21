import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import Sidebar from './Cart/Cart';
import './NavBar.css'

const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className="navBar">
      <div className="marquee-container">
         
          <div className="marquee">
            <span> 
              <p>Free Standard Shipping on Orders $50+ </p>           
            </span>
          </div>
         
      
     
      </div>

      <div className="navBar-container">
        <div className="nav-menu-bars">
          {/* dropdown menu */}
            <i className="fas fa-bars"></i>
            <div className="dropdown-content">
              <NavLink className="dropdown-links" to="/">Home</NavLink>
              <NavLink className="dropdown-links" to="/all/products">Shop</NavLink>
              <NavLink className="dropdown-links" to="/events">Events</NavLink>
              {/* <NavLink className="dropdown-links" to="#">Our Story</NavLink> */}
              <NavLink className="dropdown-links" to="/contact">Contact Us</NavLink>
            </div>
        </div>
        <div className="nav-search">
          <i class="fas fa-search"></i>
        </div>
        <div className="logo">
            <NavLink className='logo-link' to='/'><h1 className="company-name">Lumi Theory Co.</h1></NavLink>
        </div>
        <div className="nav-user">
          {!sessionUser ?
            <i className="fas fa-user"></i>
          :
            <LogoutButton/>
          }
        </div>
        <div className="nav-heart-shop">
            <div className="nav-heart">
                <i class="far fa-heart"></i>
            </div>
            <div className="nav-shopping-cart">
                {/* <i class="fas fa-shopping-cart"><span>(0)</span></i> */}
                <Sidebar/>
            </div>
        </div>
    
      </div>

    </div>
  );
}

export default NavBar;