import React from "react";
import {shallow} from "enzyme";
import MoviePageDetails from "./movie-page-details";

describe(`Test cases MoviePageDetails component`, () =>{
  const initProps = {};

  it(`Render description node`, () => {
    const wrapper = shallow(
        <MoviePageDetails {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
