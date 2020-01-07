import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


import Spinner from '../layout/Spinner'
import Repos from '../Repos'
import GithubContext from '../context/github/githubContext'

const User = ({ repos, getRepos, match }) => {
    // Context
    const { getUser, user, loading } = useContext(GithubContext);

    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

    const {
        name,
        login,
        avatar_url,
        html_url,
        blog,
        bio,
        location,
        company,
        followers,
        following,
        public_repos,
        public_gists,
        hirable
    } = user



    if (loading) return <Spinner />

    return (
        <div className="container">
            <Link to="/" className="btn btn-light m-2">
                <i class="fas fa-angle-double-left"></i> back to search
                </Link>
            Hirable: {' '}
            {hirable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
            <div className="card">
                <div className="row">
                    <div className="col-6 text-center p-4">
                        <img src={avatar_url} alt="avatar" width="200px" className="rounded-circle" />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>

                    <div className="card-body col-6">
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} target='blank' className=" btn btn-success m-2">Visit Profile</a>
                        <ul className="list-group m-2">
                            {login && (
                                <li className="list-group-item">
                                    <strong>Username:</strong> {login}
                                </li>)}
                            {company && (
                                <li className="list-group-item">
                                    <strong>Compagny:</strong> {company}
                                </li>)}
                            {blog && (
                                <li className="list-group-item">
                                    <strong>Website:</strong> {blog}
                                </li>)}
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <div className="badge badge-info p-2 m-2">Followers: {followers}</div>
                    <div className="badge badge-info p-2 m-2">Following: {following}</div>
                    <div className="badge badge-info p-2 m-2">public repos: {public_repos}</div>
                    <div className="badge badge-info p-2 m-2">public gists: {public_gists}</div>
                </div>
            </div>

            <Repos repos={repos} />
        </div>
    )
}

export default User;