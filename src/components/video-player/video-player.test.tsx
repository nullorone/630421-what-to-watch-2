import * as React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe(`Make snapshot`, () => {
  const initProps = {
    video: {
      link: {
        mp4: `New Year`,
        webm: `Christmas`,
      },
      poster: `./img/Holly`,
    },
    isMuted: true,
  };

  const createNodeMock = (element) => {
    return element.type === `video`
      ? {
        play: () => {},
        pause: () => {},
      }
      : null;
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            video={initProps.video}
          />,
          {createNodeMock}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
