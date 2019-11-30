import * as React from "react";
import MovieCardRow from "../movie-card-row/movie-card-row";
import {TypeCol} from "../../constants";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardDetailsItem from "../movie-card-details-item/movie-card-details-item";

interface MovieTabDetailsProps {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
}

const MovieTabDetails: React.FC<MovieTabDetailsProps> = (props) => {
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

export default MovieTabDetails;
