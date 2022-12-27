import React from "react";
import {
  EmailInputContainer,
  EmailInputLabel,
  EmailInput as EmailInputStyles,
} from "./EmailInput.Styles";

function EmailInput({ label, value, onChange }) {
  return (
    <EmailInputContainer>
      <EmailInputLabel>{label}</EmailInputLabel>
      <EmailInputStyles type="email" value={value} onChange={onChange} />
    </EmailInputContainer>
  );
}

export default EmailInput;
