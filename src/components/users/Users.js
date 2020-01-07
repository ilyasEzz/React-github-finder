import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../context/github/githubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;

    if (loading) return <Spinner />;
    else
        return (
            <div className="grid">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
}

Users.prototype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
export default Users
