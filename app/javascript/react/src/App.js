import React from 'react';
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
    </div>
  )
}

export default App
