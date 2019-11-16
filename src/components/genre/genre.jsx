import React from "react";
import PropTypes from 'prop-types';

const {string, bool, func} = PropTypes;

const Genre = (props) => {
  const {genre, isSelected, onGenreClick} = props;
  const activeClass = isSelected && `catalog__genres-item--active`;

  return (
    <li className={`catalog__genres-item ${activeClass}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          onGenreClick(genre);
        }}
      >
        {genre}
      </a>
    </li>
  );

};

Genre.propTypes = {
  genre: string.isRequired,
  isSelected: bool.isRequired,
  onGenreClick: func.isRequired,
};

export default Genre;
