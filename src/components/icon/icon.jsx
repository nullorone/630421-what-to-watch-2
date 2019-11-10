import PropTypes from "prop-types";
import {IconSymbol} from "../../icons";

const {string} = PropTypes;

const Icon = (props) => {
  const {name} = props;

  return IconSymbol[name.toUpperCase()];
};

Icon.propTypes = {
  name: string.isRequired,
};

export default Icon;
