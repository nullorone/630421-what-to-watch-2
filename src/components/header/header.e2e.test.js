import React from "react";
import {shallow} from "enzyme";
import {Value} from "../../constants";
import Header from "./header";

describe(`Test cases Header component`, () =>{
  const initProps = {
    children: [<div key={Value.FULL}/>],
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Header>
          {initProps.children}
        </Header>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get amount children node`, () => {
    const wrapper = shallow(
        <Header>
          {initProps.children}
        </Header>
    );

    expect(wrapper.children()).toHaveLength(Value.FULL);
  });
});
