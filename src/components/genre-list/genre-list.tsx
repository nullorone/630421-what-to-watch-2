import React from "react";
import PropTypes from 'prop-types';
import Genre from "../genre/genre";

const {string, arrayOf, func} = PropTypes;

const GenreList = (props) => {
  const {genres, selectedGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres
        .map((genre, index) => {
          const keyComponent = `genre-item-${index + 1}`;

          return (
            <Genre
              key={keyComponent}
              genre={genre}
              isSelected={selectedGenre === genre}
              onGenreClick={onGenreClick}
            />
          );
        })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: arrayOf(string.isRequired),
  selectedGenre: string.isRequired,
  onGenreClick: func.isRequired,
};

export default GenreList;
