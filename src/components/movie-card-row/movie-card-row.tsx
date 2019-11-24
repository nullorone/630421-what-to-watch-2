import React from "react";
import PropTypes from "prop-types";

const {string, any} = PropTypes;

const MovieCardRow = (props) => {
  const {type} = props;

  const rowClassName = type ? `movie-card__${type} movie-card__row` : `movie-card__row`;

  return (
    <div className={rowClassName}>
      {props.children}
    </div>
  );
};

MovieCardRow.propTypes = {
  type: string.isRequired,
  children: any,
};

export default MovieCardRow;
