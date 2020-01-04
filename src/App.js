import React, { Component } from 'react';
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';



class App extends Component {
  state = {
    users: [],
    loading: true
  }



  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}}`)

    this.setState({ users: res.data, loading: false });
  }


  searchUsers = async text => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}}`)

    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => this.setState({ users: [] });


  render() {
    const { users, loading } = this.state
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} />
          <Users users={users} loading={loading} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
