import React from "react";
import PropTypes from 'prop-types';
import Genre from "../genre/genre";

const {string, arrayOf} = PropTypes;

const GenreList = (props) => {
  const {genres} = props;

  return (
    <ul className="catalog__genres-list">
      {genres
        .map((genre, index) => {
          const keyComponent = `genre-item-${index + 1}`;

          return <Genre key={keyComponent} genre={genre}/>;
        })}
    </ul>
  );

};

GenreList.propTypes = {
  genres: arrayOf(string.isRequired),
};

export default GenreList;
