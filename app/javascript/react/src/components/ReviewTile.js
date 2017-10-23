import React from 'react';

const ReviewTile = (props) => {
  return(
    <div className="review-container">
      <div className="user-info">
        <p><strong>{props.user.username}</strong></p>
      </div>
      <div className="review-info">
        <div className="review-ratings">
          <p><strong>Reason of Visit: </strong>{props.reason_of_visit}</p>
          <p><strong>Quality of Service: </strong>{props.quality_of_service}</p>
          <p><strong>Noise Level: </strong>{props.noise_level}</p>
          <p><strong>Lighting: </strong>{props.lighting}</p>
          <p><strong>Taste: </strong>{props.fits_taste}</p>
          <p><strong>Cleanliness: </strong>{props.cleanliness}</p>
        </div>
        <div className="review-comment">
          <h3>Comment</h3>
          <p>Reviewed on {props.created_at}.strftime("%B, %d, %Y")</p>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile;
