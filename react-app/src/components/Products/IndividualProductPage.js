import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './IndividualProductPage.css'

function IndividualProductPage (){
    const params = useParams()
    const productId = params.id
    const product = useSelector((state)=>(state.product[productId]))

    const [selectedPic, setSelectedPic] = useState(product.pic1)

    const togglePic = () => {

        //toggle using the data in src of the img, so have to query selector all
        //for loop

   

        // setSelectedPic(product.pic2);
        // const previewPic2 = document.getElementById('selection-pic2')
        // const previewPic1 = document.getElementById('selection-pic1')
        // if(setSelectedPic === product.pic2){
        //     previewPic2.classList.add('candle-pic-active');
        // }else if(setSelectedPic === product.pic1){
        //     previewPic1.classList.remove('candle-pic-active')
        // }
        
    }

        const seasonalSpecial = () =>{
            if(!product.special && product.seasonal) {
                return <span>Seasonal single wicked candle</span>
            } else if(product.special && !product.seasonal) {
                return <span>Special edition single wicked candle</span>
            } else {
                return <span>Original single wicked candle</span>
            }
        }

    

    return (
        <div className='individual-product-page'>
        {/* <div>Maybe the navigation section here?</div> */}

        {/* picture section */}
            <div className='individual-product-container'>
                <div className='individual-candle-pictures'>
                    <div className='display-candle-pic'>
                        <img src={selectedPic} alt='big pic'class/>
                    </div>
                    <div className='candle-pics-selections' >
                        <div>
                            <img id='selection-pic1' src={product.pic1} alt='pic' onClick={() => setSelectedPic(product.pic1)}/>
                        </div>
                        <div>
                            {!product.pic2 ?
                            <div></div>
                            :
                            <img id='selection-pic2' src={product.pic2} alt='pic'onClick={() => setSelectedPic(product.pic2)}/>
                            } 
                        </div>
                    </div>
                    {/* might move seasonalSpecial function here */}
                </div>
                <div className='individual-product-details'>
                    <div>
                        <h1>{product.name}</h1>
                        <h2>{seasonalSpecial()}</h2>
                        <p>Star Rating Here and write a review</p>
                        <h3><span>$</span>{product.price}.00</h3>
                        <div></div>
                    </div>
                    <div>
                        {/* quantity box and add to bag button  */}
                    </div>
                    <div>
                        <p>{product.description}</p>
                        <div>
                        <h4>Frangrance Notes:</h4>
                        <p>Top: {product.top_scent}</p>
                        <p>Base: {product.base_scent}</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default IndividualProductPage
