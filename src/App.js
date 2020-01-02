import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <UserItem />
      </React.Fragment>
    );
  }
}

export default App;
