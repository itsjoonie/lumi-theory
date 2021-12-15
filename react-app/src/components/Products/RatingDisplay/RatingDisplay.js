import React from "react";

function RatingDisplay ({rating}) {
    return(
        <>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <i class="fas fa-star"></i>
                ))}
        </>
    )
}

export default RatingDisplay