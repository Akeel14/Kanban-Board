import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

import {
  SignUpFormContainer,
  FormInput,
  FormButton,
  ErrorMessage,
} from "../Styles/SignUpForm.Styles";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const history = useNavigate();

  useEffect(() => {
    if (currentUser) {
      history("/");
    }
  }, [currentUser, history]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }

    try {
      setErrorMessage("");
      setLoading(true);
      await signup(email, password);
      history("/");
    } catch (error) {
      setErrorMessage("Failed to create an account");
      console.error(error);
    } finally {
      setLoading(false);
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <SignUpFormContainer onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormButton disabled={loading} type="submit">
        Sign up
      </FormButton>
      <p>
        {" "}
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </SignUpFormContainer>
  );
}
