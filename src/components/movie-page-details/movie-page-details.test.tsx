import * as React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details";
import {EMPTY_STRING, Value} from "../../constants";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../user-block/user-block`, () => `UserBlock`);

describe(`Make snapshot`, () => {
  const initProps = {
    clickedFilm: {
      id: Value.EMPTY,
      name: `Keks`,
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
    },
    films: [{
      id: Value.EMPTY,
      name: `Keks`,
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
    icons: [`PAUSE`],
    user: {
      id: Value.FULL,
      name: `Keks`,
      email: `keks@gmail.com`,
      avatarUrl: `./img/keks.jpg`,
    },
    comments: [{
      id: Value.FULL,
      user: {
        id: Value.FULL,
        name: EMPTY_STRING
      },
      rating: Value.FULL,
      comment: EMPTY_STRING,
      date: EMPTY_STRING
    }],
    hasAuthorization: false
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePageDetails {...initProps}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
