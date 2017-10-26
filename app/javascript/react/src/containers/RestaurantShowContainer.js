import React from 'react';
import RestaurantShow from '../components/RestaurantShow';
import ReviewIndexContainer from './ReviewIndexContainer';
import ReviewFormContainer from './ReviewFormContainer';

class RestaurantShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      user: null,
      review: null,
      current_user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
  }
  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ current_user: data.user })
    })
    this.fetchRestaurant()
  }

  fetchRestaurant() {
    let restaurantId = this.props.params.id;
    fetch(`/api/v1/restaurants/${restaurantId}`)
    .then(response => response.json())
    .then(data => {
      let restaurant = JSON.parse(data.restaurant)
      this.setState({ restaurant: restaurant })
    })
  }

  addNewReview(formPayLoad) {
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayLoad)}
    ).then(this.fetchRestaurant)
  }

  deleteReview(id) {
    fetch(`/api/v1/reviews/${id}`, {
      method: 'DELETE'}
    ).then(() => {this.fetchRestaurant()})
  }

  render() {
    let review;
    if(this.state.restaurant.reviews != undefined) {
      review = <ReviewIndexContainer
                reviews={this.state.restaurant.reviews}
                deleteReview={this.deleteReview}
                current_user={this.state.current_user}
              />
    }
    return(
      <div>
        <RestaurantShow
          id={this.state.restaurant.id}
          name={this.state.restaurant.name}
          address={this.state.restaurant.address}
          city={this.state.restaurant.city}
          state={this.state.restaurant.state}
          zip={this.state.restaurant.zip}
          dollar_value={this.state.restaurant.dollar_value}
          description={this.state.restaurant.description}
          picture={this.state.restaurant.picture}
          phone_number={this.state.restaurant.phone_number}
          website_url={this.state.restaurant.website_url}
          dining_type={this.state.restaurant.restaurant_dining_type}
          food_type={this.state.restaurant.restaurant_food_type}
        />
        <ReviewFormContainer
          review={this.state.review}
          addNewReview={this.addNewReview}
          current_user={this.state.current_user}
          restaurant_id={this.props.params.id}
        />
        {review}
      </div>
    )
  }
}

export default RestaurantShowContainer;
