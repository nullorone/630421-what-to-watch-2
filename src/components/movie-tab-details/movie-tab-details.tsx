import React from "react";
import PropTypes from "prop-types";
import MovieCardRow from "../movie-card-row/movie-card-row";
import {TypeCol} from "../../constants";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardDetailsItem from "../movie-card-details-item/movie-card-details-item";

const {string, number, arrayOf} = PropTypes;

const MovieTabDetails = (props) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released
  } = props;

  return (
    <MovieCardRow type={TypeCol.TEXT}>
      <MovieCardCol type={TypeCol.TEXT}>
        <MovieCardDetailsItem name={`Director`} value={director}/>
        <MovieCardDetailsItem
          name={`Starring`}
          value={starring}
        />
      </MovieCardCol>

      <MovieCardCol type={TypeCol.TEXT}>
        <MovieCardDetailsItem name={`Run Time`} value={runTime}/>
        <MovieCardDetailsItem name={`Genre`} value={genre}/>
        <MovieCardDetailsItem name={`Released`} value={released}/>
      </MovieCardCol>
    </MovieCardRow>
  );
};

MovieTabDetails.propTypes = {
  director: string.isRequired,
  starring: arrayOf(string.isRequired),
  runTime: number.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
};

export default MovieTabDetails;
