import React, { useState } from "react";
import { NewTaskFormContainer } from "./Styles/NewTaskForm.Styles";

function NewTaskForm({ swimlaneId, onAddTask }) {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(swimlaneId, title, description);
    setTitle("");
    setDescription("");
    setIsAddingTask(false);
  };

  if (!isAddingTask) {
    return (
      <NewTaskFormContainer>
        <button onClick={() => setIsAddingTask(true)}>Add task</button>
      </NewTaskFormContainer>
    );
  }

  return (
    <NewTaskFormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add task</button>
      <button onClick={() => setIsAddingTask(false)}>Cancel</button>
    </NewTaskFormContainer>
  );
}

export default NewTaskForm;
