import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as reviewAction from '../../store/review'
import './ReviewForm.css'
import StarRating from './StarRating/StarRating';



function ReviewForm () {
    const params = useParams()
    const dispatch = useDispatch()
    const product_id = params.id
    const user_id = useSelector(state => state.session.user.id)
    console.log("what is this user id", user_id)
    const product = useSelector((state)=>(state.product[product_id]))

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('')
    const [errors, setErrors] = useState('')
    const [hover, setHover] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(reviewAction.createReview(
            user_id, 
            product_id, 
            title, 
            +rating, 
            body, 
        ))
        
        // if(data.errors){
        //     setErrors(data.errors)
        // }
    }
    
    
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div class='form-control'> 
                    <label>Title of your review</label>
                    <input type='text' placeholder='Title here....'
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}/>
                    <small>Error Message</small>
                </div>
                <div> 
                    <label for='rating'>Rating:</label>
                    {/* <StarRating/> */}
                    {/* <input type='text' placeholder='Title here....'
                    value = {rating}
                    onChange={(e) => setRating(e.target.value)}/> */}
                {/* ------rating start----- */}
                    {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1

                    return (
                    <label>
                        <input type='radio' className='rating' 
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        
                        />
                            <i className='fas fa-star' id='star' 
                            style={{ color: ratingValue <= ( hover || rating ) ? "#ffd166" :"#ced4da"}}
                            onMouseOver={()=> setHover(ratingValue)}
                            onMouseLeave={()=> setHover(null)}></i>
                   
                    </label>
                    ) 
                })}

                {/* ------rating end ------- */}
                    <small>Error Message</small>
                </div>
                <div class='form-control'> 
                    <label>What do you think?</label>
                    <textarea type='text' placeholder='Write your review here...'
                    value={body}
                    onChange ={(e) => setBody(e.target.value)}/>
                    <small>Error Message</small>
                </div>
                <button>Submit</button>
            </form>
           
        </>
    )
    
}

export default ReviewForm;