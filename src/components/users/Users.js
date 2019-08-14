import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototype = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
