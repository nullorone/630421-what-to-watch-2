import * as React from "react";
import {MINUTES_IN_HOUR, MAX_TIME_LENGTH} from "../../constants";

interface MovieCardDetailsItemProps {
  name: string;
  value: string | string[] | number;
}

const getTime = (time): string => {
  if (time.toString().length > MAX_TIME_LENGTH) {
    return time.toString();
  } else {
    const hours = Math.floor(time / MINUTES_IN_HOUR);
    const minutes = time % MINUTES_IN_HOUR;

    return `${hours}h ${minutes}m`;
  }
};

const getItem = (item): string | string[] | null => {
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

const MovieCardDetailsItem: React.FC<MovieCardDetailsItemProps> = (props) => {
  const {
    name,
    value,
  } = props;

  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{name}</strong>
      <span className="movie-card__details-value">{getItem(value)}</span>
    </p>
  );
};

export default MovieCardDetailsItem;
