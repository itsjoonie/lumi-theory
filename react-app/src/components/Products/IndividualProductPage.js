import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './IndividualProductPage.css'
import ReviewSection from '../Reviews/ReviewSection';
import RatingDisplay from './RatingDisplay/RatingDisplay';
import AddtoCart from '../Cart/AddToCart';



function IndividualProductPage (){
    const params = useParams()
    const productId = params.id
    const product = useSelector((state)=>(state.product[productId]))
    const reviews = Object.values(useSelector((state)=>(state.review)))
    const filterReview = reviews.filter(review => review.product_id === product.id)

const totalRating = () => {
    let ratingArr = [0]

    filterReview.map(review => {
        ratingArr.push(review.rating)
    })
    
    let total = ratingArr.reduce(function(acc, curr){
        return acc + curr
    })
   
    
    return Math.round(total/filterReview.length)
    
}



   

    const [selectedPic, setSelectedPic] = useState(product.pic1)
    const [rating, setRating] = useState(null)

    

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
             <div>
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
                            <h1 className='product-name-h1'>{product.name}</h1>
                            <h2 className='product-special-h2'>{seasonalSpecial()} </h2>
                            <p className='product-star'><RatingDisplay rating={totalRating()}/><span>({filterReview.length} { filterReview.length <= 1 ? <span>review</span> :<span>reviews</span> })</span></p>
                            <h3 className='product-price-h3'><span>$</span>{product.price}.00</h3>
                            <div>
                           
                                <AddtoCart product={product} />

                            </div>
                        </div>
                        <div>
                            {/* quantity box and add to cart button 
                            Free economy shipping on orders $50+ */}

                        </div>
                        <div>
                            <p className='productDescription'>{product.description}</p>
                            <div>
                            <h4 className='fragrance'>Fragrance Notes:</h4>
                            <p className='fragrance-scent'>Top: {product.top_scent}</p>
                            <p className='fragrance-scent'>Base: {product.base_scent}</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='review-container'>
                    
                    <ReviewSection product_id={product}/>
                </div>
            </div>
        </div>
    )
}

export default IndividualProductPage
