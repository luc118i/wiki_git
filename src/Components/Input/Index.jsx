import { InputContainer } from "./Styles";
import PropTypes from "prop-types";

function Input({ value, onChange, placeholder }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </InputContainer>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
