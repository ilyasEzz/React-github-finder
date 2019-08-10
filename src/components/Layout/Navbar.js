import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Alco Review",
    icon: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-success">
        <h2 className="text-white">
          <i className={this.props.icon} /> {this.props.title}
        </h2>
      </nav>
    );
  }
}

export default Navbar;
