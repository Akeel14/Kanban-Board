import React, { useState } from "react";
import { NewSwimlaneContainer } from "../Styles/NewSwimlane.Styles";
import NewSwimlaneButton from "../NewSwimlaneButton";
import NewSwimlaneForm from "../NewSwimlaneForm";

function NewSwimlane({ onAddSwimlane }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddSwimlane = (title) => {
    onAddSwimlane(title);
    setIsAdding(false);
  };

  return (
    <NewSwimlaneContainer>
      {isAdding ? (
        <NewSwimlaneForm onAddSwimlane={handleAddSwimlane} />
      ) : (
        <NewSwimlaneButton onClick={() => setIsAdding(true)} />
      )}
    </NewSwimlaneContainer>
  );
}

export default NewSwimlane;
