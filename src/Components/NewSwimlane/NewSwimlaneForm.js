import React, { useState } from "react";
import { NewSwimlaneFormContainer } from "./Styles/NewSwimlaneForm.Styles";

function NewSwimlaneForm({ onAddSwimlane }) {
  const [title, setTitle] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddSwimlane(title);
    setTitle("");
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setTitle("");
    setIsFormVisible(false);
  };

  return isFormVisible ? (
    <NewSwimlaneFormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter swimlane title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add swimlane</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </NewSwimlaneFormContainer>
  ) : (
    <NewSwimlaneFormContainer>
      <button type="button" onClick={() => setIsFormVisible(true)}>
        Add swimlane
      </button>
    </NewSwimlaneFormContainer>
  );
}

export default NewSwimlaneForm;
