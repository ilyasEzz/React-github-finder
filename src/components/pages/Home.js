import React from 'react'

import Alert from '../layout/Alert'
import Search from '../Search'
import Users from '../users/Users'

const Home = () => {
    return (
        <div className="container">
            <Alert />
            <Search />
            <Users />
        </div>
    )
}

export default Home