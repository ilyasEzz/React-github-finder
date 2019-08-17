import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
};

// in Arrow function based Componentents proptypes are declared as methods:
Repos.prototype = {
  repos: PropTypes.array.isRequired
};

export default Repos;
