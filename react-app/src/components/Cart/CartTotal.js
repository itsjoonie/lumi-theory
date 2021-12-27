import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useResetAfterPurchase } from "../../store/cart";
import './CartTotal.css'

function CartTotal () {
    
    const carts = Object.values(useSelector(state => state.cart))
    const resetCart = useResetAfterPurchase()


    
 
    

    const subTotal = () => {
        const num = [0]
        carts.map(item => {
            let total = item.quantity*item.price
            num.push(total)
        })
        let addTotals = num.reduce(function(acc, curr){
            return acc + curr
        })
        return addTotals.toFixed(2)
    }


   const purchase = () => {
       resetCart()
       window.alert('Thank you for your purchase!')
   }

   



    


    return (
        <div className='checkout-container'>
            <div className='checkout-calculation-container'>
                <div className='checkout-calculation-info'>
                        {/* <div className='subtotal'><p>Subtotal:</p></div>
                        <div className='subTotalNum'></div>
                        
                        <div className='shipping'><p>Shipping:</p></div>
                        <div className='shippingNum'>
                        </div>
                        <div className='tax'><p>Tax:</p></div>
                        <div className='taxNum'> <p></p></div> */}
                        
                        <div className='total'><h1>Total:</h1></div>
                        <div className='totalNum'><h1>{`$${subTotal()}`}</h1></div>
      
                </div>
    
            </div>
            { carts.length > 0 ? 
            <button onClick={purchase} className='checkout-button'><i className="fas fa-lock"></i>Checkout</button>
            :
            <div></div>
            }
        </div>
    )
}

export default CartTotal