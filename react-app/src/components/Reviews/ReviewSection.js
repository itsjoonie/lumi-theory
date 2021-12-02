import React from 'react';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './ReviewSection.css';
import '../../store/review'

function ReviewSection ({product_id}){
    const reviews = Object.values(useSelector((state)=>(state.review)))


    console.log(reviews.length, "what is this reviews")

    const numOfReviews = () => {
        const num = []
        reviews.map(review => {
            if(review.product_id === product_id.id){
                num.push(review.id)
            } 
        })
        return num.length
    }

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
                    numOfReviews() !== 0 ? 
                    reviews?.map(review => (
                    <div className='review-card' key={review?.id}>{ review?.product_id === product_id?.id && review.id? 
                        <div>
                            <div>{review.title}</div>
                            <div>{review.first_name} on {review.date} </div>
                            <div>{review.body}</div>
                        </div>
                    :
                        <>
                        </>
                    }
                    </div>))
                    :
                    <>
                        <p>Be the first one to leave a review!</p>
                    </>
                }

            </div>
        </div>
    )

}

export default ReviewSection;