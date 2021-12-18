import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
                                <NavLink className='productLink' to={`/product/${oneProduct.id}`}>
                                <img className='products-item-img' src={oneProduct.pic1} alt='pic'/>
                                </NavLink>
                                <div className='products-item-details'>
                                    <div>
                                    <NavLink className='productLink' to={`/product/${oneProduct.id}`}>
                                    <h2 className='productNameh2'>{oneProduct.name}</h2>
                                    </NavLink>
                                    </div>
                                    <div>
                                        <p><span>$</span>{oneProduct.price}.00</p>
                                    </div>
                                </div>

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