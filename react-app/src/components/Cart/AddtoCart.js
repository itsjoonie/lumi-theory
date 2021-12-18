import React, {useState} from 'react'
import { useSelector } from "react-redux"

import * as cartAction from '../../store/cart'

import './AddToCart.css'

function AddToCart ({product}) {

    const [ quantity, setQuantity] = useState(1)

    const cart = useSelector(state => state.cart)
    console.log(product.pic1, "what is this")

    

    const addQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }

    const subtractQuantity = (e) => {
        e.preventDefault()
        if(quantity === 1) return 
        setQuantity(quantity - 1)
    }

    const addToCart = cartAction.useAddItemToCart(
            product.name,
            product.price,
            product.id,
            product.pic1,
            quantity,
            cart
        )

    return (
            <div>
                <div className='quantity-buttons'>
                    <div>
                        <button className = 'quantity-btn' onClick={subtractQuantity}> <i class="fas fa-minus"></i> </button>
                    </div>
                    <div className='quantity-input'>
                        {quantity}
                    </div>
                    <div>
                        <button className = 'quantity-btn' onClick={addQuantity}>  <i class="fas fa-plus"></i> </button>
                    </div>
                    
                </div>
    
                <button className='addToCart-btn' type='button' onClick={addToCart}>Add to cart</button>
                
               
            </div>
        )
}

export default AddToCart
