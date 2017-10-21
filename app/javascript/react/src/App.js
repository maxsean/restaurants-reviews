import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import SearchBarContainer from './containers/searchBarContainer'
=======
import WelcomeContainer from './containers/WelcomeContainer'
>>>>>>> f7924bccc85467d71bc4d717ed7f4b556e2a8417

const App = props => {

  return(
    <div>
<<<<<<< HEAD
      <h1>Hello World</h1>
      <SearchBarContainer />
=======
      <WelcomeContainer />
>>>>>>> f7924bccc85467d71bc4d717ed7f4b556e2a8417
=======
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import WelcomeContainer from './containers/WelcomeContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

const App = (props) => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={WelcomeContainer} />
          <Route path='/restaurants/new'
            component={RestaurantsContainer}/>
        </Route>
      </Router>
>>>>>>> 18e14bf8ee2887eaee5dd246354f6f74af5d7a0a
    </div>
  )
}

export default App
