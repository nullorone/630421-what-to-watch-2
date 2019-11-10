import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmallList from "./movie-card-small-list";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    films: [{
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: EMPTY_STRING,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: EMPTY_STRING,
        preview: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: false,
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
