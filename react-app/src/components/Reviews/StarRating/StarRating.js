import React from 'react';
import './StarRating.css'

function StarRating () {
    return (
        <>
            <div> 
                {[...Array(5)].map(star => {
                    return (
                    <label>
                        <input type='radio' className='rating' />
                            <i className='fas fa-star'></i>
                   
                    </label>
                    ) 
                })}
            </div>
        </>
    )
}

export default StarRating;