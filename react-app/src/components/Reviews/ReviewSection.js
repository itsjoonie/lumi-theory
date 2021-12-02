import React from 'react';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './ReviewSection.css';
import '../../store/review'

function ReviewSection ({product_id}){
    const reviews = Object.values(useSelector((state)=>(state.review)))
    console.log(reviews, "what is this reviews")
    

    return(
        <div className='review-section'>
            {/* <div>stars rating | # of reviews</div> */}
            <h1>Reviews</h1>
            {/* <div>review snapshots? ex how many people rate 5 stas</div> */}
            {/* OR WHAT THE CANDLE LOVER SAY
            star rating based on $ reviews 
            What do you think? */}
            <div className='written-reviews'>
                {
                    reviews?.map(review => (<div className='review-card' key={review?.id}>{ review?.product_id === product_id?.id ? 
                        <div>
                            
                        </div>
                    :
                    <></>
                    }
                    </div>))
                }

            </div>
        </div>
    )

}

export default ReviewSection;