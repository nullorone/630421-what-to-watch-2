import React from "react";
import {shallow} from "enzyme";
import MovieCardRow from "./movie-card-row";
import {EMPTY_STRING} from "../../constants";

describe(`Test cases MovieCardRow component`, () =>{
  const initProps = {
    type: `academy`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardRow {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get className with prop type`, () => {
    const wrapper = shallow(
        <MovieCardRow {...initProps}/>
    );

    expect(wrapper.hasClass(`movie-card__${initProps.type}`)).toBeTruthy();
  });

  it(`Get className when prop type empty`, () => {
    const wrapper = shallow(
        <MovieCardRow type={EMPTY_STRING}/>
    );

    expect(wrapper.hasClass(`movie-card__${initProps.type}`)).toBeFalsy();
  });
});
