import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        const { clearUsers, showClear } = this.props
        return (
            <div className="mb-4">
                <form className="form " onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" name="text" value={this.state.text} className="form-control" onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Search" className="btn btn-block btn-primary" />
                </form>
                {showClear && (
                    <button className="btn btn-block btn-light my-3" onClick={clearUsers}>Clear</button>
                )}

            </div>
        )
    }
}

export default Search
