import React from "react";
import PropTypes from "prop-types";

const {array} = PropTypes;

const Header = (props) => {
  return (
    <header className="page-header movie-card__head">
      {props.children}
    </header>
  );
};

Header.propTypes = {
  children: array,
};

export default Header;
