import React, {Component} from 'react';
import RestaurantTile from '../components/RestaurantTile'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        id: 2,
        name: "Five Guys",
        address: "across the street",
        city: "Boston",
        state: "MA",
        zip: "02111",
        dollar_value: 1,
        description: "It's Five Guys",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Five_Guys%2C_Merritt_Island.JPG/1200px-Five_Guys%2C_Merritt_Island.JPG",
        phone_number: "1234567890",
        website_url: "www.fiveguys.com",
        dining_type: "finest dining",
        food_type: "Five Guys"
      }
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
