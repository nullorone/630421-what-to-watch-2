import React from "react";
import {shallow} from "enzyme";
import {EMPTY_STRING, Value} from "../../constants";
import PageScreen from "./page-screen";

describe(`Test cases PageScreen component`, () =>{
  const initProps = {
    films: [{
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: EMPTY_STRING,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: EMPTY_STRING,
        preview: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: true,
    }],
    genres: [`ECMA`, `CSS`],
    icons: [`PAUSE`],
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <PageScreen {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
