import React from 'react';
import { useSelector } from 'react-redux';
import './ProductsPage.css';

function ProductsPage (){

    const products = Object.values(useSelector((state)=>(state.product)))
    console.log(products, "WTHAT IS THIS PRODUCTS")
    return (
        <div className='productPages'>
         
        </div>
    )
}

export default ProductsPage;