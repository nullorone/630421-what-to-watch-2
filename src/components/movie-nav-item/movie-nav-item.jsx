import React from "react";
import PropTypes from "prop-types";

const {bool, string} = PropTypes;

const MovieNavItem = (props) => {
  const {active, text} = props;

  const itemClassName = active ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;

  return (
    <li className={itemClassName}>
      <a href="#" className="movie-nav__link">{text}</a>
    </li>
  );
};

MovieNavItem.propTypes = {
  active: bool.isRequired,
  text: string.isRequired,
};

export default MovieNavItem;
