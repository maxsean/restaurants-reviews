import React from 'react'
import WelcomeContainer from './WelcomeContainer'
import SearchFormContainer from './SearchFormContainer'
import SearchResultsContainer from './SearchResultsContainer'
import BackButton from '../components/BackButton'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample_restaurant: {},
      search_results: {},
      search: false
    }
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
      container = <div><BackButton/><SearchResultsContainer restaurants={this.state.search_results}/></div>
    } else {
      container = <WelcomeContainer sample_restaurant={this.state.sample_restaurant}/>
    }
    return(
      <div className="welcomeContainer">
        <div className="searchContainer">
          <div className="searchBar">

            <SearchFormContainer
              makeNewSearch = {this.makeNewSearch}
            />
          </div>
        </div>
        {container}
      </div>
    )
  }
}

export default MainContainer
