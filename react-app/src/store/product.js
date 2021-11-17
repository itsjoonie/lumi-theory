const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';

const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

export const getAllProducts = () => async (dispatch) =>{
    const response = await fetch(`/api/products/`)

    if(response.ok){
    const data = await response.json()
    dispatch(loadProducts(data))
    } else{
        return 'error'
    }
}

const initialState ={};

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_PRODUCTS:
            return {
                ...state,
                ...action.products
            }
        default:
            return state
    }
}

export default productReducer;

