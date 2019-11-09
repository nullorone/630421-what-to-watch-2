import React from "react";
import renderer from "react-test-renderer";
import {EMPTY_STRING, Value} from "../../constants";
import MovieCard from "./movie-card";

describe(`Make snapshot`, () => {
  const initProps = {
    name: `Avatar`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    genre: `Art house`,
    released: Value.FULL,
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
