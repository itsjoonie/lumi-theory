const LOAD_CART = 'cart/LOAD_CART'
const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART ='cart/REMOVE_FROM_CART'



const loadCart = (cart) => ({
    type: LOAD_CART,
    cart
})

const addToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId
})

const saveCart = (cart) => {
    try {
        const jsonCart = JSON.stringify(cart)
        localStorage.setItem('cart', jsonCart)
    }
    catch (err) {
    // ignore
    }
}


export const addItemToCart = (name, price, id, quantity) => {
    
    
}







let initialState = {}

const cartReducer = (state = initialState, action) => {

  return 'hi'
}

export default cartReducer
