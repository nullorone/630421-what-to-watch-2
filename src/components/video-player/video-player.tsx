import * as React from "react";
import {Video} from "../../types";

interface VideoPlayerProps {
  video: Video;
  isMuted?: boolean;
}

class VideoPlayer extends React.PureComponent<VideoPlayerProps, null> {
  private readonly _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  public componentDidMount(): void {
    const video = this._videoRef.current;
    video.play();
  }

  public render(): JSX.Element {
    const {
      video: {
        link: {
          mp4,
          webm,
        },
        poster,
      },
      isMuted = true,
    } = this.props;

    return (
      <video
        style={{
          width: `100%`,
          height: `100%`,
        }}
        ref={this._videoRef}
        muted={isMuted}
        poster={poster}>
        {mp4 && <source src={mp4} type="video/mp4"/>}
        {webm && <source src={webm} type="video/webm"/>}
      </video>
    );
  }

  public componentWillUnmount(): void {
    const video = this._videoRef.current;
    video.load();
  }
}

export default VideoPlayer;
