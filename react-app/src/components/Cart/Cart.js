import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
import { SidebarData } from '../Modal/SidebarData.js';
import './Cart.css';
import * as cartAction from '../../store/cart'
import CartTotal from './CartTotal.js';
import CartItem from './CartItem.js';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const cart = Object.values(useSelector(state => state.cart))
  console.log(cart, "cart ins idebar")







  return (
    <div className='sidebar'>
            <Link to='#' className='cart-icon'>
                <i class="fas fa-shopping-cart" onClick={showSidebar}></i>
                <span>{` `}</span>({cart.length ? cart.length : 0})
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <i class="fas fa-arrow-circle-right" onClick={showSidebar}></i>
                </Link>
                   <h1 className='cart-header'>My Cart ({cart.length})</h1>
                </li>
               
                <div className='itemsInCart-container'>
                    {/* CartItem */}
                    
                    { cart.length ?
                        cart.map(item => 
                        (
                    
                            <CartItem key={item.productId} item={item}/>
                      ))
                      :
                      <div className='emptyCart'>
                        <i className="fas fa-cart-plus"></i>
                        <div className='emptyCart-words'>
                        <h1>your cart is empty!</h1>
                        <NavLink className='startShopping' to='/all/products'>
                        <p>Start shopping</p>
                        </NavLink>
                        </div>
                      </div>
                    }

                    
                  </div>
                  <CartTotal/>
                  
                  
            </ul>
                    
            </nav>
          
        
    </div>
  );
}

export default Sidebar;