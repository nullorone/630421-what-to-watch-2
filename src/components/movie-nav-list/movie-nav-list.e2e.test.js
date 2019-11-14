import React from "react";
import {shallow, mount} from "enzyme";
import MovieNavList from "./movie-nav-list";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test cases MovieNavList component`, () =>{
  const initProps = {
    navItems: [{
      active: true,
      text: `Describe`,
    }],
    clickedFilm: {
      name: `Oskar`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      director: `Mask`,
      starring: [EMPTY_STRING],
      runTime: Value.FULL,
      genre: `Life`,
      released: Value.FULL,
    },
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
