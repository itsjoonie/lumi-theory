import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {
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
        </div>
        <div className="nav-search">
          <i class="fas fa-search"></i>
        </div>
        <div className="logo">
            <h1 className="company-name">Lumi Theory Co.</h1>
        </div>
        <div className="nav-user">
            <i className="fas fa-user"></i>
        </div>
        <div className="nav-heart-shop">
            <div className="nav-heart">
                <i class="far fa-heart"></i>
            </div>
            <div className="nav-shopping-cart">
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    
      </div>

    </div>
  );
}

export default NavBar;
