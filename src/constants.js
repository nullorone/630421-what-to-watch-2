export const EMPTY_STRING = ``;

export const Value = {
  EMPTY: 0,
  FULL: 1,
};

export const Pathname = {
  DEFAULT: `/`,
  DETAILS: `/details`,
  FILM: `/film`,
};

export const Img = {
  SMALL: {
    width: `280`,
    height: `175`
  },
  BIG: {
    width: `218`,
    height: `327`
  }
};

export const iconNames = [`add`, `fullscreen`, `in_list`, `pause`];

export const MOVIE_CARD_BUTTONS = [
  {
    iconName: `play-s`,
    classModifier: `play`,
    text: `Play`,
  },
  {
    iconName: `add`,
    classModifier: `list`,
    text: `My list`,
  }
];

export const MAX_TIME_LENGTH = 3;

export const CINEMA_NAME = `WTW`;

export const MOVIE_NAV_ITEMS = [
  {
    active: false,
    text: `Overview`,
  },
  {
    active: true,
    text: `Details`,
  },
  {
    active: false,
    text: `Reviews`,
  },
];

export const TypeCol = {
  TEXT: `text`,
  REVIEWS: `reviews`,
};

export const AmountSimilarFilms = {
  DEFAULT: 8,
  ON_PAGE_FILM: 4,
};

export const AMOUNT_ADDED_FILMS = 4;

export const MINUTES_IN_HOUR = 60;
