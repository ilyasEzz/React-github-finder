import React from 'react'
import PropTypes from 'prop-types'


const Repos = ({ repos }) => {
    return (
        <ul className="list-group my-4">
            {repos.map(repo => (
                <li key={repo.id} className="list-group-item">
                    <a className="font-weight-bold text-success" href={repo.html_url} target="blank">{repo.name}</a>
                </li>
            ))}
        </ul>
    )
}

Repos.prototype = {
    repos: PropTypes.object.isRequired,
}

export default Repos;
