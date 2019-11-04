import React from "react";
import PropTypes from "prop-types";
import MovieCardButton from "../movie-card-button/movie-card-button";
import {Value} from "../../constants";

const {shape, arrayOf, string, any} = PropTypes;

const MovieCardButtonList = (props) => {
  const {buttons} = props;

  return (
    <div className="movie-card__buttons">
      {buttons.map((button, index) => {
        const buttonKey = `movie-card-button-${index + Value.FULL}`;

        return <MovieCardButton key={buttonKey} {...button}/>;
      })}
      {props.children}
    </div>
  );
};

MovieCardButtonList.propTypes = {
  buttons: arrayOf(
      shape({
        iconName: string.isRequired,
        classModifier: string.isRequired,
        text: string.isRequired,
      })
  ),
  children: any,
};

export default MovieCardButtonList;
