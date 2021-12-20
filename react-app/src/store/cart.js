import { useDispatch } from "react-redux"

const LOAD_CART = 'cart/LOAD_CART'
const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART ='cart/REMOVE_FROM_CART'
const RESET_CART = 'cart/RESET_CART'



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

export const resetCart = () => ({
    type: RESET_CART,
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
    //id is the product id

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

export const useSubtractItemToCart = (id, cart) => {
    let dispatch = useDispatch()
        return async () => {
            if( cart[id].quantity <= 1) {
                delete cart[id]
            } else {
                cart[id].quantity -= 1
            }
            await dispatch(loadCart(cart))
            saveCart(cart)
        }

}

export const useDeleteIte = (id, cart) => {
    const dispatch = useDispatch ()
    return async function () {
        await dispatch(removeFromCart(id));
        delete cart[id]
        saveCart(cart)
    }
}


export const useResetAfterPurchase = () => {
    const dispatch = useDispatch ()
    return async function () {
        await dispatch(resetCart());
        localStorage.removeItem('cart')
    }
}




let initialState = {}

const cartReducer = (state = initialState, action) => {
    let newState = {...state}
    let itemId;

  switch(action.type){
        case LOAD_CART:
            return {
              ...action.cart
            };
        case REMOVE_FROM_CART:
            itemId = action.itemId
            delete newState[itemId]
            return newState
      default: 
        return state
  }
}

export default cartReducer
