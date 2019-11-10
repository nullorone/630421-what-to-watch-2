import React from "react";
import {mount} from "enzyme";
import VideoPlayer from "./video-player";

describe(`Render Component`, () => {
  const initProps = {
    video: {
      link: {
        mp4: `New Year`,
        webm: `Christmas`,
      },
      poster: `./img/Holly`,
    },
    isMuted: false,
  };

  const createNodeMock = (element) => {
    return element.type === `video`
      ? {
        play: () => {},
        pause: () => {},
      }
      : null;
  };

  jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  it(`Get component`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />,
        {createNodeMock}
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get amount source node`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />,
        {createNodeMock}
    );

    expect(wrapper.find(`source`).length).toBe(2);
  });
});
