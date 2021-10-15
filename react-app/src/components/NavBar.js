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
        <div>
          {/* dropdown menu */}
          <i class="fas fa-bars"></i>
        </div>
        <div>
          {/* search bar */}
        </div>
        <div>
          <h1 className="company-name">Lumi Theory Co.</h1>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>

    </div>
  );
}

export default NavBar;
