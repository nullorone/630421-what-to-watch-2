import * as React from "react";
import {mount} from "enzyme";
import VideoPlayer from "./video-player";
import {Value} from "../../constants";

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

  jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

  it(`Get amount source node`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />
    );

    const currentVideoElement = wrapper.instance()._videoRef.current;
    const spy = jest.spyOn(currentVideoElement, `load`);

    expect(spy).toHaveBeenCalled();
    expect(currentVideoElement.load).toBeCalledTimes(Value.FULL);

    spy.mockRestore();
  });
});
