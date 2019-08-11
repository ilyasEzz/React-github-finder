import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-success">
      <h2 className="text-white">
        <i className={icon} /> {title}
      </h2>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Alco Review",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
