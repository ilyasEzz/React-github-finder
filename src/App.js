import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './components/context/github/GithubState';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [repos, setRepos] = useState([]);



  // get the latest repositories of the user
  const getRepos = async user => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  }

  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
            <div className="container">
              {showAlert && (<Alert />)}

              <Search />
              <Users />
            </div>
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (
            <User getRepos={getRepos} loading={loading} repos={repos} {...props} />
          )} />
        </Switch>
      </Router>
    </GithubState>
  );
}

export default App;
