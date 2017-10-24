import React, {Component} from 'react';
import RestaurantTile from '../components/RestaurantTile'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let body = {
      review: {id: 1,
        restaurant_id: 3,
        reason_of_visit: "Family Party",
        quality_of_service: 2,
        noise_level: 1,
        fits_taste: true,
        lighting: 2,
        cleanliness: 3,
        comment: "I will come back again.",
        user_id: 1}
      }

      fetch('/api/v1/reviews', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then(response => response.json())
  }


  render() {

    return(
      <div>
        <div className="welcome-quote">
          "There are many restaurant review sites. Good lord, there are so many. What is this one? It's got them pie charts. I love pie charts. I love them here. I love them even over there. Yeah."  - Sean, 2017
        </div>

        <RestaurantTile
          name={this.props.sample_restaurant.name}
          address={this.props.sample_restaurant.address}
          city={this.props.sample_restaurant.city}
          state={this.props.sample_restaurant.state}
          zip={this.props.sample_restaurant.zip}
          dollar_value={this.props.sample_restaurant.dollar_value}
          description={this.props.sample_restaurant.description}
          picture={this.props.sample_restaurant.picture}
          phone_number={this.props.sample_restaurant.phone_number}
          website_url={this.props.sample_restaurant.website_url}
          dining_type={this.props.sample_restaurant.restaurant_dining_type}
          food_type={this.props.sample_restaurant.restaurant_food_type}
        />

        <button onClick={this.handleClick}>Create a review</button>
      </div>
    )
  }
}

export default WelcomeContainer;
