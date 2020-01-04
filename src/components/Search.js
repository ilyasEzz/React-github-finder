import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <form className="form mb-4">
                    <div className="form-group">
                        <input type="text" name="text" value={this.state.text} className="form-control" onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Search" className="btn btn-block btn-dark" />
                </form>
            </div>
        )
    }
}

export default Search
