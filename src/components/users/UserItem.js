import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  // the argument up is equivalent to the line below:
  // const { login, html_url, avatar_url } = props.user;

  return (
    <div className=" container center card mt-3">
      <img
        src={avatar_url}
        alt="avatar img"
        className=" rounded-circle"
        style={{ width: "100px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} target="_blank" className="btn btn-outline-dark">
          Visit link
        </a>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
