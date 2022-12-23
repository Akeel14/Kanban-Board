import React, { useState } from "react";
import {
  SwimlaneContainer,
  Title,
  RemoveButton,
  Tasks,
  Task,
} from "./SwimlaneStyles";

function Swimlane(props) {
  const [title, setTitle] = useState(props.title);
  const [isEditing, setIsEditing] = useState(false);

  function handleTitleDoubleClick() {
    setIsEditing(true);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTitleKeyPress(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
      props.onUpdate(title);
    }
  }

  return (
    <SwimlaneContainer className="swimlane">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyPress}
          autoFocus
        />
      ) : (
        <Title onDoubleClick={handleTitleDoubleClick}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {title}
          </div>
          <RemoveButton onClick={props.onDelete}>-</RemoveButton>
        </Title>
      )}
      <Tasks>
        {props.tasks.map((task) => (
          <Task key={task.id}>{task.name}</Task>
        ))}
      </Tasks>
    </SwimlaneContainer>
  );
}

export default Swimlane;
