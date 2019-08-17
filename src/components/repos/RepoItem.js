import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h4 className="m-2">
        <a href={repo.html_url} className="text-info">
          {repo.name}
        </a>
      </h4>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
