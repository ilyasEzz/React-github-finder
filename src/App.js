import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GithubState from './components/context/github/GithubState';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';


const App = () => {

  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
            <div className="container">
              {false && (<Alert />)}
              <Search />
              <Users />
            </div>
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (
            <User  {...props} />
          )} />
        </Switch>
      </Router>
    </GithubState>
  );
}

export default App;
