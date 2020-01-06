import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // Using the Search bar
  const searchUsers = async text => {
    if (text !== '') {
      setLoading(true);
      setAlert(false);

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )

      setUsers(res.data.items);
      setLoading(false);
    }
    else {
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);
    }
  }

  const clearUsers = () => setUsers([]);

  // Get information about the user
  const getUser = async user => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  }

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
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={props => (
          <div className="container">
            {showAlert && (<Alert />)}

            <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} />
            <Users users={users} loading={loading} />
          </div>
        )} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:login" render={props => (
          <User getUser={getUser} getRepos={getRepos} loading={loading} user={user} repos={repos} {...props} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
