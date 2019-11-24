import React from "react";
import PropTypes from "prop-types";

const {bool} = PropTypes;

const Logo = (props) => {
  const {light} = props;
  const logoClass = light ? `logo__link logo__link--light` : `logo__link`;

  return (
    <div className="logo">
      <a href="/" className={logoClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  light: bool.isRequired,
};

export default Logo;
