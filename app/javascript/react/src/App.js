import React from 'react';
import MainContainer from './containers/MainContainer'
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import RestaurantsContainer from './containers/RestaurantsContainer';

const App = (props) => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={MainContainer} />
          <Route path='/restaurants/new'
            component={RestaurantsContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
