import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    id: Value.EMPTY,
    name: `My Card`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      preview: EMPTY_STRING,
      previewAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
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
    runTime: Value.FULL,
    genre: EMPTY_STRING,
    released: Value.FULL,
    isFavorite: false,
    onLinkClick: jest.fn(),
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
