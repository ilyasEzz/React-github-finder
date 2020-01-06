import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url } }) => {


    return (
        <div className="card text-center">
            <div className="card-img-top">
                <img src={avatar_url} alt="avatar" className="rounded-circle" width="60px" />
            </div>
            <div className="card-body">
                <p>{login}</p>
                <Link className="btn btn-success" to={`/User/${login}`} >Learn More</Link>
            </div>
        </div>
    )
}

export default UserItem
