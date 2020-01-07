import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import GithubContext from './context/github/githubContext'

const Search = ({ clearUsers, showClear }) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        githubContext.searchUsers(text);
        setText('');
    }
    return (
        <div className="mb-4">
            <form className="form " onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="text" value={text} className="form-control" onChange={onChange} />
                </div>
                <input type="submit" value="Search" className="btn btn-block btn-primary" />
            </form>
            {showClear && (
                <button className="btn btn-block btn-light my-3" onClick={clearUsers}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}

export default Search
