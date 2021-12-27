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
  
  // const totalQuantity = () =>{
  //   const num = [0]
  //       cart.map(item => {
  //           let total = item.quantity
  //           num.push(total)
  //       })
  //       let addTotals = num.reduce(function(acc, curr){
  //           return acc + curr
  //       })
  //       return addTotals
  // }

  function totalQuantity () {
    const num = [0]
        cart.map(item => {
            let total = item.quantity
            num.push(total)
        })
        let addTotals = num.reduce(function(acc, curr){
            return acc + curr
        })
        return addTotals
  }


  return (
    <div className='sidebar'>
            <Link to='#' className='cart-icon'>
                <i class="fas fa-shopping-cart" onClick={showSidebar}>
                <span>{` `}</span>({totalQuantity() ? totalQuantity() : 0})</i>
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <i class="fas fa-arrow-circle-right" onClick={showSidebar}></i>
                </Link>
                   <h1 className='cart-header'>My Cart ({totalQuantity()})</h1>
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