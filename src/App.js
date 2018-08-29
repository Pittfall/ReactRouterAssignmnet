import React, { Component } from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom'

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import PageNotFound from './components/PageNotFound/PageNotFound';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationItems />
          <Switch>
            <Route path='/courses' component={Courses} />
            <Route path='/users' component={Users} />
            <Route path='/' exact />
            <Redirect from='/all-courses' to='/courses'/>
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
