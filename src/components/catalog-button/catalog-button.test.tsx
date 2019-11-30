import * as React from "react";
import renderer from "react-test-renderer";
import CatalogButton from "./catalog-button";

describe(`Make snapshot`, () => {
  const initProps = {
    onButtonClick: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <CatalogButton {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
