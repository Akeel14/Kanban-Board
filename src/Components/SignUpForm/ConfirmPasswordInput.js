import React, { useState } from "react";
import { ConfirmPasswordInputContainer } from "./ConfirmPasswordInput.Styles";

function ConfirmPasswordInput({ onConfirmPassword }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleBlur = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError(null);
      onConfirmPassword(confirmPassword);
    }
  };

  return (
    <ConfirmPasswordInputContainer>
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
    </ConfirmPasswordInputContainer>
  );
}

export default ConfirmPasswordInput;
