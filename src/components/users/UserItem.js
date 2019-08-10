import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    html_url: "https://github.com/mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
  };

  render() {
    const { login, html_url, avatar_url } = this.props.user;
    return (
      <div className=" container center card mt-3">
        <img
          src={avatar_url}
          alt="avatar img"
          className=" rounded-circle"
          style={{ width: "100px" }}
        />
        <h3>{this.props.user.login}</h3>
        <div>
          <a href={html_url} target="_blank" className="btn btn-outline-dark">
            Visit link
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
