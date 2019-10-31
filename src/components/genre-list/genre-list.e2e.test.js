import React from "react";
import {shallow} from "enzyme";
import GenreList from "./genre-list";

describe(`Test GenreList component`, () => {
  const initProps = {
    genres: [`Academy`, `Javascript`],
  };

  it(`Get ul node-wrapper`, () => {
    const wrapper = shallow(
        <GenreList
          {...initProps}
        />
    );

    expect(wrapper.find(`.catalog__genres-list`)).toBeTruthy();
  });

  it(`Get Genre component`, () => {
    const wrapper = shallow(
        <GenreList
          {...initProps}
        />
    );

    expect(wrapper.find(`Genre`)).toBeTruthy();
  });

  it(`Get amount children Genre component`, () => {
    const wrapper = shallow(
        <GenreList
          {...initProps}
        />
    );

    expect(wrapper.find(`.catalog__genres-list`).children()).toHaveLength(initProps.genres.length);
  });
});
