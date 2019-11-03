import React from "react";
import PropTypes from "prop-types";
import MovieNavItem from "../movie-nav-item/movie-nav-item";

const {arrayOf, shape, string, bool} = PropTypes;

const MovieNavList = (props) => {
  const {navItems} = props;

  let initialList = [];

  for (let i = 0; i < navItems.length; i++) {
    const itemKey = `movie-nav-item-${i + 1}`;
    const currentItem = navItems[i];

    initialList.push(<MovieNavItem key={itemKey} {...currentItem}/>);
  }

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {initialList}
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
