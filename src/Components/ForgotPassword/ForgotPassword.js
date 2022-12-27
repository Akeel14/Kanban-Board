import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import {
  LoginFormContainer,
  FormInput,
  SendButton,
  ErrorMessage,
  Message
} from "./ForgotPassword.Styles";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { resetPassword, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setErrorMessage("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox or spam folder for further instructions.");
    } catch (error) {
      setErrorMessage("Failed to reset password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <h2>Password Reset</h2>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {message && <Message>{message}</Message>}
      <SendButton disabled={loading} type="submit">
        Forgot Password
      </SendButton>
      <p>
        {" "}
        Remember your password? <Link to="/login">Log In</Link>{" "}
      </p>
    </LoginFormContainer>
  );
}
