import React, {useState} from 'react'
import { useSelector } from "react-redux"

import * as cartAction from '../../store/cart'

function AddtoCart ({product}) {

    const [ quantity, setQuantity] = useState(1)
    const cart = useSelector(state => state.cart)
    console.log(product.pic1, "what is this")

    const addToCart = cartAction.useAddItemToCart(
            product.name,
            product.price,
            product.id,
            product.pic1,
            quantity,
            cart
        )
    

    const addQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }

    const subtractQuantity = (e) => {
        e.preventDefault()
        if(quantity === 1) return 
        setQuantity(quantity - 1)
    }

 

    return (
        <div>
            <form>
                <div>
                    <button onClick={addQuantity}> + </button>
                        <p>{quantity}</p>
                    <button onClick={subtractQuantity}> - </button>
                </div>
                <button type='button' onClick={addToCart}>Add to cart</button>
            </form>
            
        </div>
    )
}

export default AddtoCart
