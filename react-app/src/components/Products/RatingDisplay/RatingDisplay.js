import React from "react";

function RatingDisplay ({rating}) {
    return(
        <>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <i class="fas fa-star" style={{color:"#f4d110"}}></i>
                ))}
        </>
    )
}

export default RatingDisplay