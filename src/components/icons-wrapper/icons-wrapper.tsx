import * as React from "react";
import Icon from "../icon/icon";

interface IconsWrapperProps {
  iconNames: string[];
}

const IconsWrapper: React.FC<IconsWrapperProps> = (props) => {
  const {iconNames} = props;
  return (
    <div className="visually-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        {iconNames.map((iconName, index) => <Icon key={`icon-${index + 1}`} name={iconName}/>)}
      </svg>
    </div>
  );
};

export default IconsWrapper;
