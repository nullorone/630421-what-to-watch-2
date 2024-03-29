import * as React from "react";
import renderer from "react-test-renderer";
import {EMPTY_STRING, Value} from "../../constants";
import MovieCard from "./movie-card";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../movie-card-picture/movie-card-picture`, () => `MovieCardPicture`);
jest.mock(`../logo/logo`, () => `Logo`);
jest.mock(`../movie-card-description/movie-card-description`, () => `MovieCardDescription`);
jest.mock(`../movie-card-button/movie-card-button`, () => `MovieCardButton`);

describe(`Make snapshot`, () => {
  const initProps = {
    id: Value.FULL,
    name: `Avatar`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    genre: `Art house`,
    released: Value.FULL,
    user: {
      id: Value.FULL,
      name: `Keks`,
      email: `keks@gmail.com`,
      avatarUrl: `./img/keks.jpg`,
    },
    isFavorite: false,
    onPlayButtonClick: jest.fn(),
    onListClick: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCard {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
