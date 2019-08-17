import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Repos from "../repos/Repos";

const User = ({ user, getUser, getUserRepos, loading, repos, match }) => {
  // "useEffect" mimic "ComponentsDidMount()" if we place [] as a second param
  useEffect(() => {
    // <Router/> is high order component that injects "match", "location" and "history" into the components he wraps
    // "params" object from "match" brings the "login" info that was passed into the component.
    // passed to him by  path="/user/:login"
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  // extracting all the data about the user
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  // if the page is loading
  if (loading) return <Spinner />;
  // else
  return (
    <Fragment>
      <Link to="/" className="btn btn-secondary my-4 mx-2">
        <i class="fas fa-angle-double-left" /> Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="grid-2 card   ">
        <div className="center my-2" style={{ flexDirection: "column" }}>
          <img
            src={avatar_url}
            alt="avatar"
            className="rounded-circle"
            width="200px"
          />
          <h2>{name}</h2>
          <p>location : {location}</p>
        </div>
        <div className="center my-2" style={{ flexDirection: "column" }}>
          {bio && (
            <Fragment>
              <h4>Bio:</h4>
              <p className="center">{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            className="btn btn-outline-info my-2"
          >
            Visit Github Profile
          </a>
          <ul className="list-group ">
            <li className="list-group-item">Usename: {login}</li>
            {company && (
              <Fragment>
                <li className="list-group-item">Company: {company} </li>
              </Fragment>
            )}

            {blog && (
              <Fragment>
                <li className="list-group-item">Website: {blog} </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className="card">
        <ul className="center ">
          <li className="badge badge-primary m-4">Followers: {followers}</li>
          <li className="badge badge-primary m-4">Following: {following}</li>
          <li className="badge badge-primary m-4">
            public_repos: {public_repos}
          </li>
          <li className="badge badge-primary m-4">
            public_gists: {public_gists}
          </li>
        </ul>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

// Types validation
User.propTypes = {
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

export default User;
