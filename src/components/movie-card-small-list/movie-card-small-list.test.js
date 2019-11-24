import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmallList from "./movie-card-small-list";
import {EMPTY_STRING, Value} from "../../constants";
import {BrowserRouter} from "react-router-dom";

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
        link: {
          mp4: EMPTY_STRING,
          webm: EMPTY_STRING,
        },
        poster: EMPTY_STRING,
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
    itemCurrentIndex: Value.FULL,
    onItemMouseEnter: jest.fn(),
    onItemMouseLeave: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MovieCardSmallList
              {...initProps}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
