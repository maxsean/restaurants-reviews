import React from 'react';
import RestaurantShow from '../components/RestaurantShow';
import ReviewIndexContainer from './ReviewIndexContainer';
import ReviewFormContainer from './ReviewFormContainer';
import BackButton from '../components/BackButton';
import SearchFormContainer from './SearchFormContainer';
import SearchResultsContainer from './SearchResultsContainer'

class RestaurantShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      user: null,
      reviews: {},
      current_user: {},
      search_results: {},
      search: false
    }
    this.addNewReview = this.addNewReview.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
    this.makeNewSearch = this.makeNewSearch.bind(this)
  }
  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ current_user: data.user });
    })
    .then(this.fetchRestaurant())
  }

  fetchRestaurant() {
    let restaurantId = this.props.params.id;
    fetch(`/api/v1/restaurants/${restaurantId}`)
    .then(response => response.json())
    .then(data => {
      let restaurant = JSON.parse(data.restaurant)
      let reviews = JSON.parse(data.reviews)
      this.setState({ restaurant: restaurant, reviews: reviews })
    })
  }

  addNewReview(formPayLoad) {
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayLoad)}
    )
    .then(response => response.json())
    .then(data => {
      let reviews = JSON.parse(data.reviews)
      this.setState({reviews: reviews})
    })
  }

  makeNewSearch(newSearch) {
    fetch('/api/v1/searches', {
      method: "POST",
      body: JSON.stringify(newSearch)}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        search_results: body.restaurant,
        search: true
      })
    })
  }

  deleteReview(id) {
    fetch(`/api/v1/reviews/${id}`, {
      method: 'DELETE'}
    ).then(() => {this.fetchRestaurant()})
  }

  render() {
    let container;
    let reviewForm;
    let sign_in_notice = "Please sign in to leave a review";
    if(this.state.current_user.id){
      sign_in_notice = "Leave a Review";
      reviewForm =
      <ReviewFormContainer
        review={this.state.review}
        addNewReview={this.addNewReview}
        current_user={this.state.current_user}
        restaurant_id={this.props.params.id}
      />
    }
    if (this.state.search === true) {
      container = <SearchResultsContainer restaurants={this.state.search_results}/>
    } else {
      let reviews;
      if(this.state.restaurant.reviews != null) {
        reviews = <ReviewIndexContainer
          reviews={this.state.reviews}
          current_user={this.state.current_user}
          deleteReview={this.deleteReview}
        />
      }
      container =
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
        <div className="newReviewHeader">
          <div className="reviewHeaderTitle"> {sign_in_notice}</div>
        </div>
        {reviewForm}
        {reviews}
    </div>
    }
    return(
    <div>
      <div className="searchContainer">
        <div className="searchBar">
          <SearchFormContainer
            makeNewSearch = {this.makeNewSearch}
          />
      </div>
      </div>
      <div className="backButton"><BackButton/></div>
        {container}
      </div>
    )
  }
}

export default RestaurantShowContainer;
