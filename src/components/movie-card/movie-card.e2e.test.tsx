import * as React from "react";
import {shallow} from "enzyme";
import {EMPTY_STRING, Value} from "../../constants";
import MovieCard from "./movie-card";

jest.mock(`../user-block/user-block`, () => `UserBlock`);

describe(`Test cases  component`, () =>{
  const initProps = {
    id: Value.FULL,
    name: `Avatar`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    genre: `Art house`,
    released: Value.FULL,
    user: {
      id: Value.FULL,
      name: `Keks`,
      email: `keks@gmail.com`,
      avatarUrl: `./img/keks.jpg`,
    },
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCard {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
