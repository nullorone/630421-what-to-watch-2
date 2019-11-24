import {IconSymbol} from "../../icons";

interface IconProps {
  name: string;
}

const Icon = (props: IconProps): JSX.Element => {
  const {name} = props;

  return IconSymbol[name.toUpperCase()];
};

export default Icon;
