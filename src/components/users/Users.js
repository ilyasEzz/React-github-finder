import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading, getUser }) => {
    if (loading) return <Spinner />
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
