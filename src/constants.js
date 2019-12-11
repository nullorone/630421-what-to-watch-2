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

export const iconNames = [`add`, `fullscreen`, `in_list`, `pause`, `play`];

export const MAX_TIME_LENGTH = 3;

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

export const AMOUNT_ADDED_FILMS = 20;

export const MINUTES_IN_HOUR = 60;

export const SECONDS_IN_MINUTE = 60;

export const AMOUNT_COMMENT_IN_COL = 3;

export const MovieNavTabs = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`,
};

export const MILLISECONDS_IN_SECOND = 1000;

export const Url = {
  BASE: `https://htmlacademy-react-2.appspot.com/wtw`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

export const API_TIMEOUT = 5000;

export const Status = {
  AUTHORIZATION: 401,
  SUCCESS: 200,
};

export const MASK_AVATAR = `/static`;

export const Rating = {
  BAD: `bad`,
  NORMAL: `normal`,
  GOOD: `good`,
  VERY_GOOD: `very good`,
  AWESOME: `awesome`
};
