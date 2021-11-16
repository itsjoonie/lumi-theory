const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';

const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})