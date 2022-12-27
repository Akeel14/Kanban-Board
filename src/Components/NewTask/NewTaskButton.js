import React from "react";
import { NewTaskButtonContainer } from "./Styles/NewTaskButton.Styles";

function NewTaskButton({ onClick }) {
  return (
    <NewTaskButtonContainer onClick={onClick}>
      <img
        src="https://pic.onlinewebfonts.com/svg/img_28512.png"
        alt="Add task"
      />
    </NewTaskButtonContainer>
  );
}

export default NewTaskButton;
