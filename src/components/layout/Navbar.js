import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-expand navbar-bg-dark bg-success mb-4">
            <span className="navbar-brand text-white">
                <i className={icon}></i> {title}
            </span>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link text-white" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string

}


export default Navbar

