import React, {useState} from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as cartAction from '../../store/cart'

function CartItem ({item}) {
    console.log(item.quantity, "what is this stuff")
    const cart = useSelector(state => state.cart)

    const addItem = cartAction.useChangeQuantity(item.productId, cart, 1)
    const subtractItem = cartAction.useChangeQuantity(item.productId, cart, 0)
    const deleteItem = cartAction.useDeleteItem(item.productId, cart)
    


    return (
        <div>
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
                    <div className='item-add-subtract'>
                    <div>
                        <button className='add-subtract-btn' onClick={subtractItem}><i className="fas fa-minus-circle add-sub-btn-img"></i></button>
                    </div>
                    <div>
                        <p className='item-quantity-amt'>{item.quantity}</p>
                    </div>
                    <div>
                        <button className='add-subtract-btn' onClick={addItem}><i className="fas fa-plus-circle add-sub-btn-img"></i></button>
                    </div>
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
            <div className='remove-item'>
                <div>
                <p onClick={deleteItem}>remove</p>
                </div>
            </div>
            <hr className='item-divider'/>
        </div>
                               
        </div>
    )
}

export default CartItem
