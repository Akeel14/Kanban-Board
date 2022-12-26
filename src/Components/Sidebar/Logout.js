import React from "react";
import { LogoutContainer } from "./Styles/Logout.Styles";

function Logout() {
  const handleLogout = () => {
    // Add code to handle logout here
  };

  return (
    <LogoutContainer>
      <button onClick={handleLogout}>Logout</button>
    </LogoutContainer>
  );
}

export default Logout;
