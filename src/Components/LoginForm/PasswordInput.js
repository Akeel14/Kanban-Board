import React from "react";
import { FormInput } from "./PasswordInput.Styles";

function PasswordInput({ placeholder, value, onChange }) {
  return (
    <FormInput
      type="password"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default PasswordInput;
