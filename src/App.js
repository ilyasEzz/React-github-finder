import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  searchUsers = async text => {
    // In react, you can't change state directy usinng "this.state"
    // Instead, you have to use a special method "this.setState"
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App ">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
