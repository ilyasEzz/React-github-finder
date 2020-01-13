import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';


const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={props => <User {...props} />} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
