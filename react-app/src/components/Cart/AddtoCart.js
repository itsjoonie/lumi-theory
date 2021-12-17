import React, {useState} from 'react'

import * as cartAction from '../../store/cart'

function AddtoCart ({product}) {

    const [ quantity, setQuantity] = useState(1)

    const addToCart = () => {
        cartAction.addItemToCart(
            product.name,
            product.price,
            product.id,
            quantity
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
                <button>Add to cart</button>
            </form>
            
        </div>
    )
}

export default AddtoCart
