// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return (
    <div className="review-list">
    <ul>
      {props.reviews.map(review=>{ 
          return (
          <li className="review">
           {review.headline}
          </li>
          )
      })}
    </ul>  
    </div>
    );
}

export default MovieReviews