import React, { Component } from 'react';
import BackButton from '../components/BackButton'
import RestaurantFormContainer from './RestaurantFormContainer'

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    }

    this.addNewRestaurant = this.addNewRestaurant.bind(this);
  }

  addNewRestaurant(formPayLoad) {
    fetch('/api/v1/restaurants', {
    method: 'POST',
    body: JSON.stringify(formPayLoad)
    })
  .then(response => response.json())
  .then(responseData => {
    this.setState({restaurants: [...this.state.restaurants, responseData]})
    })
  }
  render() {
    let addNewRestaurant = (formPayLoad) => this.addNewRestaurant(formPayLoad)

    return(
      <div>
        <BackButton/>
        <div className='formContainer'>
          <RestaurantFormContainer
            addNewRestaurant={addNewRestaurant}
          />
        </div>
      </div>
    )
  }
}


export default RestaurantsContainer
