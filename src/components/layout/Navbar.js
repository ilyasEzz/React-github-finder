import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-bg-dark bg-success mb-4">
            <span className="navbar-brand text-white">
                <i className={icon}></i> {title}
            </span>
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
