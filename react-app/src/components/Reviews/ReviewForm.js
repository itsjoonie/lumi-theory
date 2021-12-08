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
    const product = useSelector((state)=>(state.product[product_id]))

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('')
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('')
    const [errors, setErrors] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(reviewAction.createReview(
            user_id, 
            product_id, 
            title, 
            +rating, 
            body, 
            first_name, 
            last_name
        ))
        
        if(data.errrors){
            setErrors(data.error)
        }
    }
    
    
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div class='form-control'> 
                    <label for='first_name'>First Name</label>
                    <input type='text' placeholder='' />
                    <small>Error Message</small>
                </div>
                <div class='form-control'> 
                    <label for='lastName'>Last Name</label>
                    <input type='text' placeholder='' />
                    <small>Error Message</small>
                </div>
                <div class='form-control'> 
                    <label for='rating'>Rating</label>
                    <StarRating/>
                    <small>Error Message</small>
                </div>

            </form>
           
        </>
    )
    
}

export default ReviewForm;