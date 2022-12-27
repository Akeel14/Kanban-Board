import React from "react";
import { LogoutContainer } from "./Styles/Logout.Styles";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();

  const history = useNavigate();

  async function handleLogout(event) {
    event.preventDefault();

    try {
      await logout();
      history("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LogoutContainer>
      <button onClick={handleLogout}>Logout</button>
    </LogoutContainer>
  );
}

export default Logout;
