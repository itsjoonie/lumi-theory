import { useDispatch } from "react-redux"

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


export const useAddItemToCart = (name, price, id, pic1,quantity, cart) =>  { //we put use in the name to make it a custom react hook so we can use dispatch cuz dispatch cannot be use in a reg function

    let dispatch = useDispatch()

    return async() => {

        if(!cart[id]){
            cart[id] = {quantity, price, name, pic1}
        } else {
            cart[id].quantity += quantity
        }

        await dispatch(loadCart(cart))
        saveCart(cart)
    }


}







let initialState = {}

const cartReducer = (state = initialState, action) => {
    let newState = {...state}

  switch(action.type){
      case LOAD_CART:
          return {
              ...action.cart
          }
        
       
      default: 
        return state
  }
}

export default cartReducer
