import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './CartTotal.css'

function CartTotal () {

    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)

    const cart = Object.values(useSelector(state => state.cart))
    console.log(cart, "WHAT IS CARTTTTT")
    

    // useEffect(() => {
    //     let total = 0
    //     cart.forEach((item) => {
    //      total += item.price
    //     })
    //   setTotal(total)
    // }, [setTotal, cart])

  

    // const calculateTotal = () => {
        
    // }

    const allTotal = () => {
        const num = [0]
        cart.map(item => {
            let total = item.quantity*item.price
            console.log(total, "WHAT IS THIS TOTALLLLL")
            num.push(total)
        })
        let addTotals = num.reduce(function(acc, curr){
            return acc + curr
        })

        return addTotals
    }


    return (
        <div className='checkout-container'>
            <div className='checkout-calculation-container'>
                <div className='checkout-calculation-info'>

                        {/* <div className='tax'><p>Tax:</p></div>
                        <div className='taxNum'> <p>{tax}</p></div> */}
                        {/* <div className='shipping'><p>Shipping:</p></div>
                        <div className='shippingNum'>{ total < 50 ? 
                        <span>Free</span> : <span>{setShipping(25)}{shipping}</span>
}                       </div> */}
                        
                        <div className='total'><h1>Total:</h1></div>
                        <div className='totalNum'><h1>{`$${allTotal()}`}</h1></div>
      
                </div>
    
            </div>
            <button><i class="fas fa-lock"></i>Checkout</button>
        </div>
    )
}

export default CartTotal