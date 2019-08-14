import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className="m-3" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="search for a user..."
            value={text}
            onChange={this.onChange}
          />
          <button
            type="submit"
            className="btn btn-block btn-dark my-2"
            disabled={text === ""}
          >
            Search
          </button>
        </form>
        {showClear && (
          <div className="m-3">
            <button className=" btn btn-block btn-info  " onClick={clearUsers}>
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }

  static propType = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };
}

export default Search;
