import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";

export class User extends Component {
  componentDidMount() {
    // <Router/> is high order component and injects "match", "location" and "history" into the components he wraps
    // "params" object from "match" brings the "login" info that was passed into the component.
    // passed to him by  path="/user/:login"
    this.props.getUser(this.props.match.params.login);
    console.log(this.props);
  }

  render() {
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
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-secondary my-4 mx-2">
          Back to search
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
            <a href={html_url} className="btn btn-outline-info my-2">
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
      </Fragment>
    );
  }
}

export default User;
