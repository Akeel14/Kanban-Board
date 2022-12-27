import React, { useState } from "react";
import {
  PasswordInputContainer,
  PasswordInputLabel,
  PasswordInput as PasswordInputStyles,
  PasswordInputError,
} from "./PasswordInput.Styles";

function PasswordInput({ label, onChange, error }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <PasswordInputContainer>
      <PasswordInputLabel>{label}</PasswordInputLabel>
      <div>
        <PasswordInputStyles
          type={isPasswordVisible ? "text" : "password"}
          onChange={onChange}
        />
        <button onClick={togglePasswordVisibility}>
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      </div>
      {error && <PasswordInputError>{error}</PasswordInputError>}
    </PasswordInputContainer>
  );
}

export default PasswordInput;
