import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const {string, bool, shape} = PropTypes;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.play();
  }

  render() {
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

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.load();
  }
}

VideoPlayer.propTypes = {
  video: shape({
    link: shape({
      mp4: string.isRequired,
      webm: string.isRequired,
    }),
    poster: string.isRequired,
  }),
  isMuted: bool,
};
