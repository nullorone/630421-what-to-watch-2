import React from "react";
import renderer from "react-test-renderer";
import PageScreen from "./page-screen";
import {EMPTY_STRING} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    films: [{
      title: `My Awesome Movie`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
    genres: [`Academy`]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <PageScreen {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
