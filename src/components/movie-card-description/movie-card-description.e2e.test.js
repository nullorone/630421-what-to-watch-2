import React from "react";
import {shallow} from "enzyme";
import {Value} from "../../constants";
import MovieCardDescription from "./movie-card-description";

describe(`Test cases MovieCardDescription component`, () =>{
  const initProps = {
    title: `New Year`,
    genre: `Art - House`,
    year: Value.FULL,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardDescription {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with prop title`, () => {
    const wrapper = shallow(
        <MovieCardDescription {...initProps}/>
    );

    expect(wrapper.find(`.movie-card__title`)).toBeTruthy();
  });

  it(`Get node with prop genre`, () => {
    const wrapper = shallow(
        <MovieCardDescription {...initProps}/>
    );

    expect(wrapper.find(`.movie-card__genre`)).toBeTruthy();
  });

  it(`Get node with prop year`, () => {
    const wrapper = shallow(
        <MovieCardDescription {...initProps}/>
    );

    expect(wrapper.find(`.movie-card__year`)).toBeTruthy();
  });
});
