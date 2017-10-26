import React from 'react';
import RestaurantTile from '../components/RestaurantTile'

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let restaurants = this.props.restaurants.map (restaurant => {
      return(
        <RestaurantTile
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          city={restaurant.city}
          state={restaurant.state}
          zip={restaurant.zip}
          dollar_value={restaurant.dollar_value}
          description={restaurant.description}
          picture={restaurant.picture}
          phone_number={restaurant.phone_number}
          website_url={restaurant.website_url}
          dining_type={restaurant.restaurant_dining_type}
          food_type={restaurant.restaurant_food_type}
        />
      )
    })
    return(
      <div>
        {restaurants}
      </div>
    )
  }
}

export default SearchResultsContainer;
