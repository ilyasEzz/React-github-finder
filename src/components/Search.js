import React, { useState, useContext } from 'react'

import GithubContext from './context/github/githubContext'
import AlertContext from './context/alert/alertContext';

const Search = () => {
    // Local State
    const [text, setText] = useState('');

    // Context
    const alertContext = useContext(AlertContext);
    const githubContext = useContext(GithubContext);
    const { users, searchUsers, clearUsers } = githubContext;

    // Local Functions
    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('please enter something!', 'danger');
        }
        else {
            searchUsers(text);
            setText('');
        }
    }
    return (
        <div className="mb-4">
            <form className="form " onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="text" value={text} className="form-control" onChange={onChange} />
                </div>
                <input type="submit" value="Search" className="btn btn-block btn-primary" />
            </form>
            {users.length > 0 && (
                <button className="btn btn-block btn-light my-3" onClick={clearUsers}>Clear</button>
            )}
        </div>
    )
}


export default Search
