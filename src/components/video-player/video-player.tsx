import * as React from "react";
import {Video} from "../../types";

interface VideoPlayerProps {
  video: Video;
  videoRef?: React.RefObject<HTMLVideoElement>;
  isMuted?: boolean;
}

class VideoPlayer extends React.PureComponent<VideoPlayerProps, null> {
  private readonly _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);
    this._videoRef = this.props.videoRef ? this.props.videoRef : React.createRef();
  }

  public componentDidMount(): void {
    const video = this._videoRef.current;
    video.load();
  }

  public componentWillUnmount(): void {
    const video = this._videoRef.current;
    video.onplay = null;
  }

  public render(): JSX.Element {
    const {
      video: {
        link: {
          mp4,
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
        preload="none"
        ref={this._videoRef}
        muted={isMuted}
        autoPlay={true}
        poster={poster}>
        {mp4 && <source src={mp4} type="video/mp4"/>}
      </video>
    );
  }
}

export default VideoPlayer;
