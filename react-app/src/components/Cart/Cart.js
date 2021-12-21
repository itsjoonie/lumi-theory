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
                   <h1 className='cart-header'>My Cart (#)</h1>
                </li>
               
                <div className='itemsInCart-container'>
                    {/* CartItem */}
                    
                    {
                      cart.map(item => 
                      (
                   
                          <div className='items-detail-containers'>
                            <div className='items-details'>
                                <div>
                                  <img className='cartItemImg' src={item.pic1} alt='pic'/>
                                </div>
                                <div className='item-detail-info'>
                                  <h1 className='item-name'>{item.name}</h1>
                                  <div className='item-price-info'>
                                    <div>
                                      <h2>Price:</h2>
                                    </div>
                                    <div>
                                      <p><span>$</span>{item.price}.00</p>
                                    </div>
                                  </div>
                                  <div className='item-price-info'>
                                    <div>
                                      <h2>Quantity:</h2>
                                    </div>
                                    <div>
                                      <p>{item.quantity}</p>
                                    </div>
                                  </div>
                                  
                                </div>
                            </div>
                            <div className='item-total-price'>
                                    <div>
                                      <h3>Total:</h3>
                                    </div>
                                    <div>
                                      <h3><span>$</span>{item.price*item.quantity}</h3>
                                    </div>
                                </div>
                              <hr className='item-divider'/>
                          </div>

                          
                      
                      ))
                    }
                  </div>
                
            </ul>
            </nav>
     
    </div>
  );
}

export default Sidebar;