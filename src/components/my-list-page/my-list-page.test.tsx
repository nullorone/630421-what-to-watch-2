import * as React from "react";
import renderer from "react-test-renderer";
import {EMPTY_STRING, Value} from "../../constants";
import MyListPage from "./my-list-page";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../logo/logo`, () => `Logo`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);

describe(`Make snapshot`, () => {
  const initProps = {
    favoritesFilms: [{
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
    user: {
      id: Value.FULL,
      email: EMPTY_STRING,
      name: EMPTY_STRING,
      avatarUrl: EMPTY_STRING,
    },
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListPage {...initProps}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
