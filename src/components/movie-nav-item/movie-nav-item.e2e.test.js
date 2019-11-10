import React from "react";
import {shallow} from "enzyme";
import MovieNavItem from "./movie-nav-item";

describe(`Test cases MovieNavItem component`, () =>{
  const initProps = {
    active: false,
    text: `Movie link`
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieNavItem {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with text prop`, () => {
    const wrapper = shallow(
        <MovieNavItem {...initProps}/>
    );

    expect(wrapper.find(`.movie-nav__link`)).toBeTruthy();
  });

  it(`Don't get className, when active prop === false`, () => {
    const wrapper = shallow(
        <MovieNavItem {...initProps}/>
    );

    expect(wrapper.hasClass(`movie-nav__item--active`)).toBeFalsy();
  });
});
