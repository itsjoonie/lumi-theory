import React from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './IndividualProductPage.css'

function IndividualProductPage (){
    const params = useParams()
    const productId = params.id
    const product = useSelector((state)=>(state.product[productId]))
    console.log(product, "WHAT IS PARAM")


    // use params and then get products[id], where the id is params 


    return (
        <div className='individual-product-page'>
        {/* <div>Maybe the navigation section here?</div> */}

        {/* picture section */}
            <div className="individual-candle-pictures">
                <div className="display-candle-pic">

                </div>
                <div className="candle-pics-selection">
                    <img className='candle-pic' src={product.pic1} alt='pic'/>
                    {!product.pic2 ?
                        <div></div>
                        :
                        <img className='candle-pic' src={product.pic2} alt='pic'/>
                    }
               
                    
                </div>
            </div>

        </div>
    )
}

export default IndividualProductPage
