import React, { useState } from "react";
import { FormInput } from "./UsernameInput.Styles";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <FormInput
      type="text"
      placeholder="Username"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  );
}

export default UsernameInput;
