const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';

const LOAD_PRODUCT = 'products/LOAD_PRODUCT'

const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const loadOneProduct = (product) => ({
    type: LOAD_PRODUCT,
    product
})

export const getAllProducts = () => async (dispatch) =>{
    const response = await fetch(`/api/products/`)

    if(response.ok){
    const data = await response.json()
    dispatch(loadProducts(data))
    } else {
        return 'error'
    }
}

// export const getOneProduct =(id) => async (dispatch) => {
//     const res = await fetch (`api/products/${id}`)

//     if(res.ok){
//         const data = await res.json()
//         dispatch(loadOneProduct(data))
//     } else {
//         return 'error'
//     }
// }


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

