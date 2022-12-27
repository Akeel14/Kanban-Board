import React from "react";
import { LoginButtonContainer } from "./LoginButton.Styles";

function LoginButton({ onClick }) {
  return <LoginButtonContainer onClick={onClick}>Login</LoginButtonContainer>;
}

export default LoginButton;
