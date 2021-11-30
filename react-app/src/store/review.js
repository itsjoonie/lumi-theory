const LOAD_REVIEWS = 'review/LOAD_REVIEWS';

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

export const getAllReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews`)

    if(res.ok){
        const data = await res.json()
        dispatch(loadReviews(data))
    } else {
        return ' review error'
    }
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