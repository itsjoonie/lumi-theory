import React from "react";
import './CartTotal.css'

function CartTotal () {
    return (
        <div className='checkout-container'>
            <div className='checkout-calculation-container'>
                <div className='checkout-calculation-info'>

                        <div className='tax'><p>Tax:</p></div>
                        <div className='taxNum'> <p>$5</p></div>
                        <div className='shipping'><p>Shipping:</p></div>
                        <div className='shippingNum'>shipping amt</div>
                        <div className='total'><h1>Total:</h1></div>
                        <div className='totalNum'><h1>total amt</h1></div>
      
                </div>
    
            </div>
            <button><i class="fas fa-lock"></i>Checkout</button>
        </div>
    )
}

export default CartTotal