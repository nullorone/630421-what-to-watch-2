import React from "react";
import {mount} from "enzyme";
import {EMPTY_STRING, Value} from "../../constants";
import MovieCard from "./movie-card";

describe(`Test cases  component`, () =>{
  const initProps = {
    name: `Avatar`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    genre: `Art house`,
    released: Value.FULL,
  };

  it(`Render component`, () => {
    const wrapper = mount(
        <MovieCard {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
