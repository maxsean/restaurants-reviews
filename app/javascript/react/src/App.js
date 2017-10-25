import React from 'react';
import MainContainer from './containers/MainContainer'
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import RestaurantsContainer from './containers/RestaurantsContainer';
import ReviewFormContainer from './containers/ReviewFormContainer';
import RestaurantShowContainer from './containers/RestaurantShowContainer';


const App = (props) => {
  return(
    <div className="mainContainer">
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={MainContainer} />
          <Route path='/restaurants/new'
            component={RestaurantsContainer}/>
          <Route path='/restaurants/:id' component={RestaurantShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
