import React from 'react';
import { useSelector } from 'react-redux';
import './ProductsPage.css';

function ProductsPage (){

    const products = Object.values(useSelector((state)=>(state.product)))
    console.log(products, "WTHAT IS THIS PRODUCTS")
    return (
        <div className='productsPages'>
            {/* banners  maybe*/}
            {/* products page sidebar */}

            <div className='products-item-container'>
                <div className='products-item-square'>
                    {products?.map(oneProduct =>(<div key={oneProduct.id} className='products-item-content'>
                        <div className='products-item-card'>
                            <img className='products-item-pic' src={oneProduct.pic1} alt='pic'/>

                        </div>
                    
                    </div>
                    ))}

                </div>


            </div>
         
        </div>
    )
}

export default ProductsPage;