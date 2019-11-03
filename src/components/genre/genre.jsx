import React from "react";
import PropTypes from 'prop-types';

const {string} = PropTypes;

const Genre = (props) => {
  const {genre} = props;
  // const activeClass = ` catalog__genres-item--active`;

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );

};

Genre.propTypes = {
  genre: string.isRequired,
};

export default Genre;
