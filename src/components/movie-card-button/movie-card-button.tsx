import * as React from "react";
import {Button} from "../../types";

const MovieCardButton: React.FC<Button> = (props) => {
  const {
    className,
    iconName,
    classModifier,
    text,
    size,
    onButtonClick,
    usefulLoad,
  } = props;

  const width = size ? size.width : 19;
  const height = size ? size.height : 19;
  const buttonClassName = className || `btn ${classModifier && `btn--${classModifier}`} movie-card__button`;
  const useIcon = `#${iconName}`;

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={(evt): void => {
        evt.preventDefault();
        if (onButtonClick && usefulLoad !== undefined) {
          onButtonClick(usefulLoad);
        } else if (onButtonClick && usefulLoad === undefined) {
          onButtonClick();
        }
      }}>
      <svg viewBox={`0 0 ${width} ${height}`} width={`${width}`} height={`${height}`}>
        <use xlinkHref={useIcon} />
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default MovieCardButton;
