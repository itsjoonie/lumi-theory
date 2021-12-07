const LOAD_REVIEWS = 'review/LOAD_REVIEWS';
const ADD_REVIEW = 'review/ADD_REVIEW';
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const getAllReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews`)

    if(res.ok){
        const data = await res.json()
        dispatch(loadReviews(data))
    } else {
        return 'review error'
    }
}

export const createReview = (user_id, product_id, title, rating, body) => async (dispatch) => {
    const res = await fetch(`/api/reviews/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id, product_id, title, rating, body
        })

    })
}

const initialState ={};

const reviewReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_REVIEWS:
            return {
                ...state,
                ...action.reviews
            }
        default:
            return state
    }
}

export default reviewReducer;