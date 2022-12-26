import React from "react";
import { NewSwimlaneButtonContainer } from "./Styles/NewSwimlaneButton.Styles";

function NewSwimlaneButton({ onClick }) {
  return (
    <NewSwimlaneButtonContainer onClick={onClick}>
      <img src="https://pic.onlinewebfonts.com/svg/img_28512.png" alt="Add swimlane" />
    </NewSwimlaneButtonContainer>
  );
}

export default NewSwimlaneButton;
