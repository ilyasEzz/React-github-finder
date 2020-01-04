import React, { Component } from 'react';
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';



class App extends Component {
  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}}`)

    this.setState({ users: res.data, loading: false });
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Users users={this.state.users} loading={this.state.loading} />
      </React.Fragment>
    );
  }
}

export default App;
