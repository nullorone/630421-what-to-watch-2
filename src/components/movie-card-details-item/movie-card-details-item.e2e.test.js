import React from "react";
import {shallow} from "enzyme";
import MovieCardDetailsItem from "./movie-card-details-item";

describe(`Test cases MovieCardDetailsItem component`, () =>{
  const initProps = {
    name: `My dad`,
    value: `Vladimir Putin`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardDetailsItem {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with prop name`, () => {
    const wrapper = shallow(
        <MovieCardDetailsItem {...initProps}/>
    );

    expect(wrapper.find(`.movie-card__details-name`)).toBeTruthy();
  });

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardDetailsItem {...initProps}/>
    );

    expect(wrapper.find(`.movie-card__details-value`)).toBeTruthy();
  });
});
