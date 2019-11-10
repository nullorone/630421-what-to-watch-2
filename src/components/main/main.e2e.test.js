import React from 'react';
import {shallow} from "enzyme";
import Main from "./main";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test Main component`, () => {
  const initialProps = {
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
      isFavorite: true,
    }],
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
      isFavorite: true,
    },
    genres: [`ECMA`, `CSS`],
    icons: [`PAUSE`],
  };

  it(`Return section movie-card`, () => {
    const wrapper = shallow(
        <Main
          {...initialProps}
        />
    );

    expect(wrapper.find(`.movie-card`)).toBeTruthy();
  });
});
