import React from 'react';
import RestaurantShow from '../components/RestaurantShow';
import ReviewIndexContainer from './ReviewIndexContainer';

class RestaurantShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
  }

  componentDidMount() {
    let restaurantId = this.props.params.id;
    fetch()
    .then(response => response.json())
    .then(data => {
      this.setState({ restaurant: data })
    })
  }

  render() {
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
        <ReviewIndexContainer
          reviews={this.state.restaurant.reviews}
        />
      </div>
    )
  }
}

export default RestaurantShowContainer;
