import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    } else {
      this.props.setAlert(" Please enter something.", "danger");
    }
  };

  render() {
    const { text } = this.state;
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="search for a user..."
            value={text}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-block btn-dark my-3 ">
            Search
          </button>
        </form>
        {showClear && (
          <button
            className=" btn btn-block btn-info my-3 "
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }

  static propType = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };
}

export default Search;
