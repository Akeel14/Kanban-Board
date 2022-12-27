import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import {
  LoginFormContainer,
  FormInput,
  LoginButton,
  ErrorMessage,
} from "../Styles/LoginForm.Styles";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setErrorMessage("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErrorMessage("Failed to sign in to your account");
      console.error(error);
    } finally {
      setLoading(false);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <h2>Log in</h2>
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <LoginButton disabled={loading} type="submit">
        Log in
      </LoginButton>
      <p>
        {" "}
        Need have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-password"> Forgot your password?</Link>{" "}
      </p>
    </LoginFormContainer>
  );
}

export default LoginForm;
