import React, { Component } from "react";
import { yieldExpression } from "@babel/types";

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
    return (
      <div>
        <form className="m-3" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="search for a user..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-block btn-dark my-2">
            search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
