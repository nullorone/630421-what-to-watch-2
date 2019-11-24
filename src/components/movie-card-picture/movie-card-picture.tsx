import * as React from "react";
import {Img} from "../../constants";

interface MovieCardPictureProps {
  className: string;
  picture: {
    src: string;
    alt: string;
    width?: string;
    height?: string;
  };
  onImgClick?: () => void;
}

const MovieCardPicture: React.FC<MovieCardPictureProps> = (props) => {
  const {
    className,
    picture: {
      src,
      alt,
      width,
      height,
    },
    onImgClick,
  } = props;

  const ImgWidth = width ? width : Img.SMALL.width;
  const imgHeight = height ? height : Img.SMALL.height;

  return (
    <div className={className} onClick={onImgClick}>
      <img
        src={src}
        alt={alt}
        width={ImgWidth}
        height={imgHeight}
      />
    </div>
  );
};

export default MovieCardPicture;
