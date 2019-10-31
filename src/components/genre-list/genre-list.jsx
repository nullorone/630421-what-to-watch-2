import React from "react";
import PropTypes from 'prop-types';
import Genre from "../genre/genre";

const {string, arrayOf} = PropTypes;

const GenreList = (props) => {
  const {genres} = props;
  let genreList = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const keyComponent = `genre-item-${i + 1}`;

    genreList.push(<Genre key={keyComponent} genre={genre}/>);
  }

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );

};

GenreList.propTypes = {
  genres: arrayOf(string.isRequired),
};

export default GenreList;
