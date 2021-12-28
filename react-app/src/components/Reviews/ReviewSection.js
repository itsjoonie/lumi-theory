import React, {useState} from 'react';
import {NavLink, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import './ReviewSection.css';
import * as reviewAction from '../../store/review'
import Modal from '../Modal/Modal';
import ReviewForm from './ReviewForm';
import RatingDisplay from '../Products/RatingDisplay/RatingDisplay';


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

function ReviewSection ({product_id}){
    const dispatch = useDispatch()
    const reviews = Object.values(useSelector((state)=>(state.review)))
    const sessionUser= useSelector(state => state.session.user?.id);
    console.log(sessionUser, "WHAT IS THIS")
    const [isOpen, setIsOpen] = useState(false)


    const numOfReviews = () => {
        const num = []
        reviews.map(review => {
            if(review.product_id === product_id.id){
                num.push(review.id)
            } 
        })
        return num.length
    }

    const handleDelete = (e) => {
        console.log( e.currentTarget.id, "WHAT IS MY TARGET ID PLS")
        dispatch(reviewAction.deleteOneReview(e.currentTarget.id))
    }

    return(
        <div className='review-section'>
            {/* <div>stars rating | # of reviews</div> */}
            <div className='review-banner1'>
                <h1 className='review-heading1'>What the people are saying</h1>
                <div className='review-section-addreview'>
                    
                    <div >
                        <p className='review-basedOn'> Based on {numOfReviews()}{ numOfReviews() <=1 ? <span> review</span>: <span> reviews</span>}</p>
                    </div>
                    { sessionUser ?
                    <div style={BUTTON_WRAPPER_STYLES}>
                    
                        <button className="write-review-btn" onClick={() => setIsOpen(true)}>Love it? Write a review!</button>

                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <ReviewForm onClose={() => setIsOpen(false)}/>
                        </Modal>
                    </div>
                    
                    :
                        <div>
                            <NavLink to='/login'><button className="write-review-btn">Sign in to leave a review</button></NavLink>
                        </div>
                    }
                </div>
            </div>
            
            {/* <div>review snapshots? ex how many people rate 5 stas</div> */}
            {/* OR WHAT THE CANDLE LOVER SAY
            star rating based on $ reviews 
            What do you think? */}
            <div className='written-reviews'>
                {
                    numOfReviews() !== 0 ? 
                    reviews?.map(review => (
                    <div className='review-card' key={review?.id}>{ review?.product_id === product_id?.id && review.id? 
                        <div className='review-card-details'>

                            <p className='review-card-star'> <RatingDisplay rating={review.rating}/></p>
                            <h4 className='review-card-title'>{review.title}</h4>
                            <p className='review-card-reviewers'>{review.first_name} <span>on</span> {review.date} </p>
                            <p>{review.body}</p>
                            <p className='deleteorDelete'>{ sessionUser === review.user_id ? 
                                <div className='deleteEdit'>
                                    <div><p id={review?.id} onClick={handleDelete}>delete</p></div>
                                </div>
                                :
                                
                                <></>
                                }
                            </p>
                            <hr/>
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