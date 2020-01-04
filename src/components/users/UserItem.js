import React from 'react';

const UserItem = ({ user: { login, avatar, html_url } }) => {
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

export default UserItem
