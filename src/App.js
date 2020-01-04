import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
