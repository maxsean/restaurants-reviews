import React from 'react'
import WelcomeContainer from './WelcomeContainer'
import SearchFormContainer from './SearchFormContainer'
import SearchResultsContainer from './SearchResultsContainer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample_restaurant: {},
      search_results: {},
      search: false
    }
    //bind
    this.makeNewSearch = this.makeNewSearch.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/restaurants')
    .then( response => response.json())
    .then( body => {
      this.setState( { sample_restaurant: body.restaurant } )
      }
    )
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

  render() {
    let container;
    if (this.state.search === true) {
      container = <SearchResultsContainer restaurants={this.state.search_results}/>
    } else {
      container = <WelcomeContainer sample_restaurant={this.state.sample_restaurant}/>
    }
    return(
      <div>
        <SearchFormContainer
          makeNewSearch = {this.makeNewSearch}
        />
        {container}
      </div>
    )
  }
}

export default MainContainer
