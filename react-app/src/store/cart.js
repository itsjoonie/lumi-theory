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


export const useAddItemToCart = (name, price, productId, pic1, quantity, cart) =>  { //we put use in the name to make it a custom react hook so we can use dispatch cuz dispatch cannot be use in a reg function
    //id is the product id

    let dispatch = useDispatch()

    return async() => {

        if(!cart[productId]){
            cart[productId] = {quantity, price, name, pic1, productId}
        } else {
            cart[productId].quantity += 1
        }

        await dispatch(loadCart(cart))
        saveCart(cart)
    }

}

export const useChangeQuantity = (productId, cart, action) => {
    let dispatch = useDispatch()
        return async () => {
            if(action) {
                cart[productId].quantity+=1
            } else{
                if (cart[productId].quantity <= 1) {
                    delete cart[productId]
                } else {
                    cart[productId].quantity -= 1
                } 
            }
            await dispatch(loadCart(cart))
            saveCart(cart)
        }
}

export const useDeleteItem = (productId, cart) => {
    const dispatch = useDispatch ()
    return async function () {
        await dispatch(removeFromCart(productId));
        delete cart[productId]
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
        case RESET_CART:
            return state = {}
      default: 
        return state
  }
}

export default cartReducer
