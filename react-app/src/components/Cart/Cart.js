import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { SidebarData } from '../Modal/SidebarData.js';
import './Cart.css';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const cart = Object.values(useSelector(state => state.cart))
  console.log(cart, "cart ins idebar")


  return (
    <div className='sidebar'>
            <Link to='#' className='cart-icon'>
                <i class="fas fa-shopping-cart" onClick={showSidebar}></i>
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <i class="fas fa-arrow-circle-right"></i>
                </Link>
                </li>
                  {/* CartItem */}
                  {
                    cart.map(item => 
                    (
                      <li>
                        
                      </li>
                    ))
                  }
                
            </ul>
            </nav>
     
    </div>
  );
}

export default Sidebar;