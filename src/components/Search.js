import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ clearUsers, showClear, searchUsers }) => {
    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        searchUsers(text);
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
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}

export default Search
