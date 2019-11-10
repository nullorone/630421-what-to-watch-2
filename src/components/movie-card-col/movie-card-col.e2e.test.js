import React from "react";
import {shallow} from "enzyme";
import MovieCardCol from "./movie-card-col";

describe(`Test cases MovieCardCol component`, () =>{
  const initProps = {
    type: `academy`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardCol {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get className of props`, () => {
    const wrapper = shallow(
        <MovieCardCol {...initProps}/>
    );

    expect(wrapper.hasClass(`movie-card__${initProps.type}-col`)).toBeTruthy();
  });
});
