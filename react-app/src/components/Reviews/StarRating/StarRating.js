import React, {useState} from 'react';
import './StarRating.css'

function StarRating ({rating, setRating}) {
    const [hover, setHover] = useState(null)

    return (
        <>
            <div> 
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
            </div>
        </>
    )
}

export default StarRating;