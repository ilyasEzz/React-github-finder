import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loadind: false
  };

  async componentDidMount() {
    // In react, you can't change state directy usinng "this.state"
    // Instead, you have to use a special method "this.setState"
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ loading: false, users: res.data });
  }

  render() {
    return (
      <div className="App ">
        <Navbar />
        <Users users={this.state.users} loading={this.state.loadind} />
      </div>
    );
  }
}

export default App;
