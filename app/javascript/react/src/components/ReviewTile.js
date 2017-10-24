import React from 'react';

class ReviewTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      disabledUpvote: false,
      disabledDownvote: false
    }
    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {
   if (!this.state.disabledUpvote) {
     this.setState({
       disabledUpvote: true,
       disabledDownvote: false
     });
    }
  }

  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true
      });
    }
  }
  render() {
   let date = Date(this.props.created_at).toString().substring(3,15)
   return(
     <div className="review-container">
       <hr/>
       <div className="user-info">
         <p><strong>{this.props.user.username}</strong></p>
       </div>
       <div className="review-info">
         <div className="review-ratings">
           <p><strong>Reason of Visit: </strong>{this.props.reason_of_visit}</p>
           <p><strong>Quality of Service: </strong>{this.props.quality_of_service}</p>
           <p><strong>Noise Level: </strong>{this.props.noise_level}</p>
           <p><strong>Lighting: </strong>{this.props.lighting}</p>
           <p><strong>Taste: </strong>{this.props.fits_taste}</p>
           <p><strong>Cleanliness: </strong>{this.props.cleanliness}</p>
         </div>
         <div className="review-comment">
           <h3>Comment</h3>
           <p>Reviewed on{date}</p>
           <p>{this.props.comment}</p>
         </div>
         <div className="votes">
           <button
             id="Upvote"
             disabled={this.state.disabledUpvote}
             onClick={this.handleUpvoteClicked}
           >Upvote</button>
           <button
             id="Downvote"
             disabled={this.state.disabledDownvote}
             onClick={this.handleDownvoteClicked}
           >Downvote</button>
         </div>
       </div>
     </div>
    )
  }
}

export default ReviewTile;
