import React from "react";
import PropTypes from "prop-types";

const {string, any} = PropTypes;

const MovieCardCol = (props) => {
  const {type} = props;

  const colClassName = type && `movie-card__text-col`;

  return (
    <div className={colClassName}>
      {props.children}
    </div>
  );
};

MovieCardCol.propTypes = {
  type: string.isRequired,
  children: any,
};

export default MovieCardCol;
