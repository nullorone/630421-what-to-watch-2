import * as React from "react";

interface LogoProps {
  light: boolean;
}

const Logo: React.FC<LogoProps> = (props) => {
  const {light} = props;
  const logoClass = light ? `logo__link logo__link--light` : `logo__link`;

  return (
    <div className="logo">
      <a href="/" className={logoClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

export default Logo;
