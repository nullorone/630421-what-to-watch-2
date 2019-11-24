import React from "react";
import renderer from "react-test-renderer";
import MovieNavList from "./movie-nav-list";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    navItems: [{
      active: true,
      text: `Describe`,
    }],
    clickedFilm: {
      name: `Oskar`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      director: `Mask`,
      starring: [EMPTY_STRING],
      runTime: Value.FULL,
      genre: `Life`,
      released: Value.FULL,
    },
    activeItem: `Describe`,
    onItemClick: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieNavList {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
