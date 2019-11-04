import React from "react";
import {shallow, mount} from "enzyme";
import MovieNavList from "./movie-nav-list";

describe(`Test cases MovieNavList component`, () =>{
  const initProps = {
    navItems: [{
      active: true,
      text: `Describe`,
    }]
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieNavList {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with text prop`, () => {
    const wrapper = mount(
        <MovieNavList {...initProps}/>
    );

    expect(wrapper.find(`.movie-nav__link`)).toBeTruthy();
  });

  it(`Get className when active prop === true`, () => {
    const wrapper = mount(
        <MovieNavList {...initProps}/>
    );

    expect(wrapper.find(`.movie-nav__item--active`)).toBeTruthy();
  });
});
