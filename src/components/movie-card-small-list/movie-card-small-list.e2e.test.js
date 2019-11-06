import React from "react";
import {shallow} from "enzyme";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test Movie Card component`, () => {
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

  it(`Return node-wrapper`, () => {
    const wrapper = shallow(
        <MovieCardSmallList {...initProps}/>
    );

    expect(wrapper.find(`.catalog__movies-list`)).toBeTruthy();
  });

  it(`Get MovieCardSmall component`, () => {
    const wrapper = shallow(
        <MovieCardSmallList {...initProps}/>
    );

    expect(wrapper.find(`MovieCardSmall`)).toBeTruthy();
  });

  it(`Get amount MovieCardSmall component`, () => {
    const wrapper = shallow(
        <MovieCardSmallList {...initProps}/>
    );

    expect(wrapper.find(`.catalog__movies-list`).children()).toHaveLength(Value.FULL);
  });

});

