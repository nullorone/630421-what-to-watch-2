import * as React from "react";
import renderer from "react-test-renderer";
import MovieCardPicture from "./movie-card-picture";
import {Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    className: `my-picture`,
    picture: {
      src: `.img/empty.jpg`,
      alt: `Empty picture`,
      width: Value.FULL.toString(),
      height: Value.FULL.toString(),
    },
    onImgClick: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardPicture {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
