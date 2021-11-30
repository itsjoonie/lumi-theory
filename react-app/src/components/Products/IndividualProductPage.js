import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './IndividualProductPage.css'

function IndividualProductPage (){
    const params = useParams()
    const productId = params.id
    const product = useSelector((state)=>(state.product[productId]))

    const [selectedPic, setSelectedPic] = useState(product.pic1)

    return (
        <div className='individual-product-page'>
        {/* <div>Maybe the navigation section here?</div> */}

        {/* picture section */}
            <div className='individual-candle-pictures'>
                <div className='display-candle-pic'>
                    <img src={selectedPic} alt='big pic'/>
                </div>
                <div className='candle-pics-selection' >
                    <img className='candle-pic' src={product.pic1} alt='pic' onClick={() => setSelectedPic(product.pic1)}/>
                    {!product.pic2 ?
                        <div></div>
                        :
                        <img className='candle-pic' src={product.pic2} alt='pic'onClick={() => setSelectedPic(product.pic2)}/>
                    }
               
                    
                </div>
            </div>

        </div>
    )
}

export default IndividualProductPage
