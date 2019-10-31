import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmallList from "./movie-card-small-list";
import {EMPTY_STRING} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    films: [{
      title: `My Awesome film`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardSmallList
            {...initProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
