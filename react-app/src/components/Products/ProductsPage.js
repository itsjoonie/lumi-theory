import React from 'react';
import { useSelector } from 'react-redux';
import './ProductsPage.css';

function ProductsPage (){

    const products = Object.values(useSelector((state)=>(state.product)))
    console.log(products, "WTHAT IS THIS PRODUCTS")
    return (
        <div className='productsPages'>
            <div className="productsPages-main">
                <div className='productpage-sidebar'>
                {/* products page sidebar */}
                    <h2> Sidebar Here</h2>
                </div>

                <div className='products-item-container'>
                    {/* banners  maybe*/}
                    {/* products page sidebar */}
                    <div className='products-item-square'>
                        {products?.map(oneProduct =>(<div key={oneProduct.id} className='products-item-card'>
                            <div className='products-item-content'>
                                <img className='products-item-img' src={oneProduct.pic1} alt='pic'/>
                                <h2>{oneProduct.name}</h2>
                                <p><span>$</span>{oneProduct.price}.00</p>

                            </div>
                        
                        </div>
                        ))}

                    </div>


                </div>
            </div>
         
        </div>
    )
}

export default ProductsPage;