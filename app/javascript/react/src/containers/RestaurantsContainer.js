import React, { Component } from 'react';
import BackButton from '../components/BackButton'
import RestaurantFormContainer from './RestaurantFormContainer'

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      current_user: {}
    }
    this.addNewRestaurant = this.addNewRestaurant.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({current_user: data.user})
    })
  }

  addNewRestaurant(formPayLoad) {
    fetch('/api/v1/restaurants', {
    method: 'POST',
    body: JSON.stringify(formPayLoad)
    })
  .then(response => response.json())
  .then(responseData => {
    this.setState({restaurant: responseData})
    })
    if (this.state.restaurant !== {}) {
      window.location.href="/"
    }
  }

  render() {
    let addNewRestaurant = (formPayLoad) => this.addNewRestaurant(formPayLoad)

    return(
      <div>
        <div className="backButton"><BackButton/></div>
        <div className='formContainer'>
          <RestaurantFormContainer
            current_user={this.state.current_user}
            addNewRestaurant={addNewRestaurant}
          />
        </div>
      </div>
    )
  }
}

export default RestaurantsContainer
