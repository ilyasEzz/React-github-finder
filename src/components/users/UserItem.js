import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  // the argument up is equivalent to the line below:
  // const { login, html_url, avatar_url } = props.user;

  return (
    <div className=" container center card">
      <img
        src={avatar_url}
        alt="avatar img"
        className=" rounded-circle"
        style={{ width: "100px" }}
      />
      <h3>{login}</h3>
      <div>
        <button
          className="btn btn-dark mb-2"
          onClick={() => window.open(html_url, "_blank")}
        >
          Visit link
        </button>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
