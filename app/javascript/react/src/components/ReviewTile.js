import React from 'react';

class ReviewTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      disabledUpvote: false,
      disabledDownvote: false,
      karma: 0
    }
    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
    this.handleClearClicked = this.handleClearClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.current_user.id) {
      let check_state = {
        user_id: this.props.current_user.id,
        review_id: this.props.id
      }
      fetch('/api/v1/users', {
        method: "POST",
        body: JSON.stringify(check_state)
      })
      .then(response => response.json())
      .then(data => {
        if(data["value"] == -1) {
          this.setState({
            disabledUpvote: false,
            disabledDownvote: true
          })
        } else if(data["value"] == 0) {
          this.setState({
            disabledUpvote: false,
            disabledDownvote: false
          })
        } else if(data["value"] == 1) {
          this.setState({
            disabledUpvote: true,
            disabledDownvote: false
          })
        }
        this.setState({
          karma: data["karma"]
        })
      })
    }
  }

  handleUpvoteClicked() {
    if (!this.state.disabledUpvote) {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false
      });
      let vote = {
        user_id: this.props.current_user.id,
        review_id: this.props.id,
        value: 1
      }
      fetch('/api/v1/votes', {
        method: "POST",
        body: JSON.stringify(vote)}
      )
      .then(response => response.json())
      .then(data => {
        this.setState({karma: data["karma"]})
      })
    }
  }

  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true
      });
      let vote = {
        user_id: this.props.current_user.id,
        review_id: this.props.id,
        value: -1
      }
      fetch('/api/v1/votes', {
        method: "POST",
        body: JSON.stringify(vote)}
      )
      .then(response => response.json())
      .then(data => {
        this.setState({karma: data["karma"]})
      })
    }
  }

  handleClearClicked() {
    this.setState({
      disabledUpvote: false,
      disabledDownvote: false
    });
    let vote = {
      user_id: this.props.current_user.id,
      review_id: this.props.id,
      value: 0
    }
    fetch('/api/v1/votes', {
      method: "POST",
      body: JSON.stringify(vote)}
    )
    .then(response => response.json())
    .then(data => {
      this.setState({karma: data["karma"]})
    })
  }

  bubbler(value) {
    let num = [1,2,3,4,5]
    let bubbles = num.map(n => {
      if (n <= value) {
        return (
          <i class="fa fa-circle" aria-hidden="true"></i>
        )
      } else {
        return (
          <i class="fa fa-circle-o" aria-hidden="true"></i>
        )
      }
    })
    return(
      bubbles
    )
  }

  render() {
    let date = Date(this.props.created_at).toString().substring(3,15)

    let button
    if (this.props.current_user.admin) {
      button = <button onClick={this.props.handleDelete}>Delete this review</button>
    }

    let quality_of_service = this.bubbler(this.props.quality_of_service)
    let noise_level = this.bubbler(this.props.noise_level)
    let lighting = this.bubbler(this.props.lighting)
    let cleanliness = this.bubbler(this.props.cleanliness)

    let fits_taste;
      if(this.props.fits_taste == true) {
        fits_taste = "Yes"
      } else {
        fits_taste = "No"
      }

    return(
      <div>
      <div className="review-container">
      <div className="redLine">
        <div className="column left">
          <img className="profilePhoto" src="https://iheartdogs.com/wp-content/uploads/2014/03/dogchef.jpg"></img>
          <p><strong>{this.props.user.username}</strong></p>
        </div>
        <div className="column middle">
            <div className="column middle innerLeft">
              <p><strong>Reason of Visit</strong></p>
              <div className="reviewValue">{this.props.reason_of_visit}</div>
              <p><strong>Quality of Service</strong></p>
              <div className="reviewValue">{quality_of_service}</div>
              <p><strong>Noise Level</strong></p>
              <div className="reviewValue">{noise_level}</div>
            </div>
            <div className="column middle innerRight">
              <p><strong>Lighting</strong></p>
              <div className="reviewValue">{lighting}</div>
              <p><strong>Taste</strong></p>
              <div className="reviewValue">{fits_taste}</div>
              <p><strong>Cleanliness</strong></p>
              <div className="reviewValue">{cleanliness}</div>
            </div>
        </div>
          <div className="column right">
            <div className="column right commentsLeft">
              <h3>Comment</h3>
              <p>Reviewed on{date}</p>
              <p>{this.props.comment}</p>
            </div>
            <div className="column right commentsRight">
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
              <button
                id="Clear"
                onClick={this.handleClearClicked}
                >Clear Vote</button>
              <span>Score: {this.state.karma}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
   let date = Date(this.props.created_at).toString().substring(3,15)
   let button
   if (this.props.current_user.admin) {
     button = <button onClick={this.props.handleDelete}>Delete this review</button>
   }
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
           <button
             id="Clear"
             onClick={this.handleClearClicked}
           >Clear Vote</button>
           <p>Score: {this.state.karma}</p>
         </div>
         <div>{button}</div>
       </div>
     </div>
    )
  }
}

      export default ReviewTile;
