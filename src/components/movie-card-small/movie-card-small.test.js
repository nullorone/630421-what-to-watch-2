import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {EMPTY_STRING} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    title: `My Awesome film`,
    img: {
      src: EMPTY_STRING,
      alt: EMPTY_STRING,
    },
    onLinkEnter: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardSmall
            {...initProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
