import React from "react";
import {shallow} from "enzyme";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test Movie Card component`, () => {
  const initProps = {
    films: [{
      title: `My Awesome film`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
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

