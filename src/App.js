import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';



class App extends Component {
  state = {
    users: [],
    loading: true,
    showAlert: false,
    user: {},
    repos: [],
  }



  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false });
  }

  // Using the Search bar
  searchUsers = async text => {
    if (text !== '') {
      this.setState({ loading: true, showAlert: false })

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )

      this.setState({ users: res.data.items, loading: false });
    }
    else {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 5000);
    }

  }

  clearUsers = () => this.setState({ users: [] });

  // Get information about the user
  getUser = async user => {
    this.setState({ loading: true, });

    const res = await axios.get(
      `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );



    this.setState({ user: res.data, loading: false })
  }

  // get the latest repositories of the user
  getRepos = async user => {
    this.setState({ loading: true, });

    const res = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    console.log(res.data);

    this.setState({ repos: res.data, loading: false })
  }


  render() {
    const { users, user, repos, loading } = this.state
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" render={props => (
              <div className="container">
                {this.state.showAlert && (<Alert />)}

                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} />
                <Users users={users} loading={loading} />
              </div>
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={props => (
              <User getUser={this.getUser} getRepos={this.getRepos} loading={loading} user={user} repos={repos} {...props} />
            )} />
          </Switch>


        </Fragment>
      </Router>
    );
  }
}

export default App;
