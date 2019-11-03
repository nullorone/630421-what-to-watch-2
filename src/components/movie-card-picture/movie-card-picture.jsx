import React from "react";
import PropTypes from "prop-types";
import {Img} from "../../constants";

const {string, shape} = PropTypes;

const MovieCardPicture = (props) => {
  const {
    className,
    picture: {
      src,
      alt,
      width,
      height,
    }
  } = props;

  const ImgWidth = width ? width : Img.SMALL.width;
  const imgHeight = height ? height : Img.SMALL.height;

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        width={ImgWidth}
        height={imgHeight}
      />
    </div>
  );
};

MovieCardPicture.propTypes = {
  className: string.isRequired,
  picture: shape({
    src: string.isRequired,
    alt: string.isRequired,
    width: string,
    height: string,
  }),
};

export default MovieCardPicture;
