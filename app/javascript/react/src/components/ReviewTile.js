import React from 'react';

const ReviewTile = (props) => {
  let date = Date(props.created_at).toString().substring(3,15)

  let button
  if (props.current_user.admin) {
    button = <button onClick={props.handleDelete}>Delete this review</button>
  }


  return(
    <div className="review-container">
      <hr/>
      <div className="user-info">
        <p><strong>Username: {props.user.username}</strong></p>
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
          <p>Reviewed on {date}</p>
          <p>{props.comment}</p>
        </div>

        <div>{button}</div>
      </div>
    </div>
  )
}

export default ReviewTile;
