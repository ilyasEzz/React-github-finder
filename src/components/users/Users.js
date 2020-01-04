import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                avatar: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "defunkt",
                id: 2,
                avatar: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt",
            },
            {

                login: "evanphx",
                id: 7,
                avatar: "https://avatars0.githubusercontent.com/u/7?v=4",
                html_url: "https://github.com/evanphx",
            }
        ]
    }


    render() {
        return (
            <div className="grid container">
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const UserStyle = {
    display: "grid",
    gridTemplateRows: "(3, 1fr)",
    gridGap: "10px"
}

export default Users
