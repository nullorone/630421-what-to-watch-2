import React from "react";
import PropTypes from "prop-types";
import MovieNavItem from "../movie-nav-item/movie-nav-item";

const {arrayOf, shape, string, bool} = PropTypes;

const MovieNavList = (props) => {
  const {navItems} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navItems
          .map((item, index) => {
            const itemKey = `movie-nav-item-${index + 1}`;

            return <MovieNavItem key={itemKey} {...item}/>;
          })}
      </ul>
    </nav>
  );
};

MovieNavList.propTypes = {
  navItems: arrayOf(
      shape({
        active: bool.isRequired,
        text: string.isRequired,
      })
  ),
};

export default MovieNavList;
