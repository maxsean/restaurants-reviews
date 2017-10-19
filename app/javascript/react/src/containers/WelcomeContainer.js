import React, {Component} from 'react';
import RestaurantTile from '../components/RestaurantTile'
import FormContainer from './FormContainer'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
    this.makeNewSearch = this.makeNewSearch.bind(this)
    this.createRestaurant = this.createRestaurant.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  clearState() {
    this.setState( {restaurant: {} } )
  }

  createRestaurant() {
    let formPayload = {name: "Panera", address: "55 Summer St.", city: "Boston",
            state: "MA", zip: "02111", dollar_value: 2, user_id: 1}

    fetch('/api/v1/restaurants', {
      method: "POST",
      body: JSON.stringify(formPayload)
    })
    .then( response => response.json())
    .then( body => {
      this.setState( { restaurant: body.restaurant } )
      }
    )
  }

  componentDidMount() {
    fetch('/api/v1/restaurants')
    .then( response => response.json())
    .then( body => {

      this.setState( { restaurant: body.restaurant } )
      }
    )
  }

  makeNewSearch(newSearch) {
    fetch('/api/v1/searches', {
      method: "POST",
      body: JSON.stringify(newSearch)
    }
  )
  .then(response => response.json())
  .then(body => {
    this.setState( {restaurant: body.restaurant} )
    console.log(this.state)
  })
}

  render() {

    return(
      <div>
        <div className="welcome-quote">
          "There are many restaurant review sites. Good lord, there are so many. What is this one? It's got them pie charts. I love pie charts. I love them here. I love them even over there. Yeah."  - Sean, 2017
        </div>
        <button onClick={this.createRestaurant}>CREATE NEW RESTAURANT</button>
        <button onClick={this.clearState}>CLEAR STATE</button>
        <FormContainer
          makeNewSearch={this.makeNewSearch}
        />
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
