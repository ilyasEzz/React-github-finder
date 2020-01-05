import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';



class App extends Component {
  state = {
    users: [],
    loading: true,
    showAlert: false
  }



  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}}`)

    this.setState({ users: res.data, loading: false });
  }


  searchUsers = async text => {
    if (text !== '') {
      this.setState({ loading: true, showAlert: false })

      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}}`)

      this.setState({ users: res.data.items, loading: false });
    }
    else {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 5000);
    }

  }

  clearUsers = () => this.setState({ users: [] });


  render() {
    const { users, loading } = this.state
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
          </Switch>


        </Fragment>
      </Router>
    );
  }
}

export default App;
