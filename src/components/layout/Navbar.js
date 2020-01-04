import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"

    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string

    }

    render() {
        return (
            <nav className="navbar navbar-bg-dark bg-success mb-4">
                <a href="#" className="navbar-brand text-white">
                    <i className={this.props.icon}></i> {this.props.title}
                </a>
            </nav>
        )
    }
}

export default Navbar
