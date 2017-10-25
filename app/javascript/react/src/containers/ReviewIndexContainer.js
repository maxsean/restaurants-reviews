import React from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewIndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    let reviews = this.props.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          reason_of_visit={review.reason_of_visit}
          quality_of_service={review.quality_of_service}
          noise_level={review.noise_level}
          fits_taste={review.fits_taste}
          lighting={review.lighting}
          cleanliness={review.cleanliness}
          comment={review.comment}
          created_at={review.created_at}
          user={review.user}
          current_user={this.props.current_user}
        />
      )
    })
    return(
      <div>
        <div className="reviewIndexHeader">
          <hr />
          <h2>Reviews</h2>
        </div>
          {reviews}
      </div>
    )
  }
}

export default ReviewIndexContainer;
