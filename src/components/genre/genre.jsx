import React from "react";
import PropTypes from 'prop-types';

const {string, bool} = PropTypes;

const Genre = (props) => {
  const {genre, genreLink, isActive} = props;
  const baseClass = `catalog__genres-item`;
  const activeClass = isActive ? (baseClass + ` catalog__genres-item--active`) : baseClass;
  const link = genreLink ? genreLink : `#`;

  return (
    <li className={activeClass}>
      <a href={link} className="catalog__genres-link">{genre}</a>
    </li>
  );

};

Genre.propTypes = {
  genre: string.isRequired,
  genreLink: string.isRequired,
  isActive: bool.isRequired,
};

export default Genre;
