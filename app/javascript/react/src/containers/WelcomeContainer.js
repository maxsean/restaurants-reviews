import React, {Component} from 'react';
import RestaurantTile from '../components/RestaurantTile'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
  }
  render() {

    return(
      <div>
        <div className="welcome-quote">
          "There are many restaurant review sites. Good lord, there are so many. What is this one? It's got them pie charts. I love pie charts. I love them here. I love them even over there. Yeah."  - Sean, 2017
        </div>
        <RestaurantTile
          key={this.state.restaurant.id}
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
      </div>
    )
  }
}

export default WelcomeContainer;
