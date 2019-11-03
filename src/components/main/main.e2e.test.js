import React from 'react';
import {shallow} from "enzyme";
import Main from "./main";
import {EMPTY_STRING} from "../../constants";

describe(`Test Main component`, () => {
  const initialProps = {
    movies: [{
      title: `My film`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
    genres: [`ECMA`, `CSS`],
  };

  it(`Return section movie-card`, () => {
    const wrapper = shallow(
        <Main
          {...initialProps}
        />
    );

    expect(wrapper.find(`.movie-card`)).toBeTruthy();
  });
});
