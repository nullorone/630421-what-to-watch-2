import * as React from 'react';
import renderer from "react-test-renderer";
import Main from './main';
import {EMPTY_STRING, Value} from "../../constants";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../icons-wrapper/icons-wrapper`, () => `IconsWrapper`);
jest.mock(`../movie-card/movie-card`, () => `MovieCard`);
jest.mock(`../genre-list/genre-list`, () => `GenreList`);
jest.mock(`../movie-card-small-list/movie-card-small-list`, () => `MovieCardSmallList`);
jest.mock(`../logo/logo`, () => `Logo`);

describe(`Make snapshot`, () => {
  const initialProps = {
    promo: {
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: `1`,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: {
          mp4: EMPTY_STRING,
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
      isFavorite: true,
    },
    filteredFilms: [{
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: `1`,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: {
          mp4: EMPTY_STRING,
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
      isFavorite: true,
    }],
    films: [{
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: `1`,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: {
          mp4: EMPTY_STRING,
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
      isFavorite: true,
    }],
    selectedGenre: EMPTY_STRING,
    genres: [`ECMA`, `CSS`],
    onSelectedGenreClick: jest.fn(),
    onButtonClick: jest.fn(),
    onListClick: jest.fn(),
    user: {
      id: Value.FULL,
      email: EMPTY_STRING,
      name: EMPTY_STRING,
      avatarUrl: EMPTY_STRING,
    }
  };

  it(`Render main screen`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              {...initialProps}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


