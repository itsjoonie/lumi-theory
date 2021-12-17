import React, {useState} from 'react'
import { useSelector } from "react-redux"

import * as cartAction from '../../store/cart'

function AddtoCart ({product}) {

    const [ quantity, setQuantity] = useState(1)
    const cart = useSelector(state => state.cart)

    const addToCart = (e) => {
        e.preventDefault()
        cartAction.useAddItemToCart(
            product.name,
            product.price,
            product.id,
            quantity,
            cart
        )
    }

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
                <button onClick={addToCart}>Add to cart</button>
            </form>
            
        </div>
    )
}

export default AddtoCart
