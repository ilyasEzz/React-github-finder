import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        const { getUser, match: { params } } = this.props
        getUser(params.login);
    }

    render() {
        const {
            name,
            login,
            avatar_url,
            html_url,
            blog,
            bio,
            location,
            followers,
            following,
            public_repos,
            public_gists,
            hirable
        } = this.props.user
        const { loading } = this.props
        return (
            <div className="container">
                <h1>{name}</h1>
            </div>
        )
    }
}

export default User;