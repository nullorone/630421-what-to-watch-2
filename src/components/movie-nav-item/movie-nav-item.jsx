import React from "react";
import PropTypes from "prop-types";

const {bool, string, func} = PropTypes;

const MovieNavItem = (props) => {
  const {active, text, onTabClick} = props;

  const itemClassName = active ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;

  return (
    <li className={itemClassName}>
      <a
        href="#"
        className="movie-nav__link"
        data-tab-name={text.toLowerCase()}
        onClick={(evt) => {
          evt.preventDefault();
          onTabClick(evt.target.dataset.tabName)}}>
        {text}
      </a>
    </li>
  );
};

MovieNavItem.propTypes = {
  active: bool.isRequired,
  text: string.isRequired,
  onTabClick: func.isRequired,
};

export default MovieNavItem;
