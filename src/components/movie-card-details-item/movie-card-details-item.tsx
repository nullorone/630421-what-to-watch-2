import React from "react";
import PropTypes from "prop-types";
import {MINUTES_IN_HOUR, MAX_TIME_LENGTH} from "../../constants";


const {string, arrayOf, oneOfType, number} = PropTypes;

const MovieCardDetailsItem = (props) => {
  const {
    name,
    value,
  } = props;

  const getTime = (time) => {
    if (time.toString().length > MAX_TIME_LENGTH) {
      return time.toString();
    } else {
      const hours = Math.floor(time / MINUTES_IN_HOUR);
      const minutes = time % MINUTES_IN_HOUR;

      return `${hours}h ${minutes}m`;
    }
  };

  const getItem = (item) => {
    switch (typeof item) {
      case `string`:
        return item;
      case `number`:
        return getTime(item);
      case `object`:
        return item.map((itemValue, index) => {
          const fragmentKey = `item-value-${index + 1}`;

          return (
            <React.Fragment key={fragmentKey}>
              {itemValue}, <br/>
            </React.Fragment>
          );
        });
    }

    return null;
  };

  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{name}</strong>
      <span className="movie-card__details-value">{getItem(value)}</span>
    </p>
  );
};

MovieCardDetailsItem.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, arrayOf(string.isRequired), number]),
};

export default MovieCardDetailsItem;
