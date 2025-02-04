import { ButtonContainer } from "./Styles";
import PropTypes from "prop-types";

function Button({ onClick }) {
  return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
