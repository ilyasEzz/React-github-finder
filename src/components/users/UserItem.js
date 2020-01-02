import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        login: "mojombo",
        id: 1,
        avatar: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",

    }
    render() {
        const { login, avatar, html_url, id } = this.state
        return (
            <div className="card text-center">
                <div className="card-img-top">
                    <img src={avatar} alt="avatar" className="rounded-circle" width="60px" />
                </div>
                <div className="card-body">
                    <p>{login}</p>
                    <a href={html_url} target="blank" className="btn btn-dark">Learn More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
