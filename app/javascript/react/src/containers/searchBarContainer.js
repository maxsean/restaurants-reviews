import React from 'react'

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: ""
    }
  this.search1 = this.search1.bind(this)
  }

  search1() {
    fetch('api/v1/restaurants',
    {
      method: "POST",
      body: {name: "Panera", address: "55 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 2,
        description: "Sells bread.", picture: "https://chefservicesgroup.com/wp-content/uploads/2011/12/panera.jpg", phone_number: "3333333333", website_url: "https://www.panerabread.com", user_id: 1}
    })
    .then(response => response.json())
    .then(body =>
      this.setState( {restaurant: body }))
    }


    render() {
      return(
        <div>
          <h1>Restaurant Search</h1>
          <button onClick={this.search1}> Create New </button>
          <h1>{this.state.restaurant}</h1>
        </div>
      )
    }
  }

export default SearchBarContainer;
