import React, { useState } from "react";
import { TaskContainer, TaskFormContainer } from "./Task.Styles";

function Task({ task, swimlaneId, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdateTask = (event) => {
    event.preventDefault();
    onUpdateTask(swimlaneId, task.id, { title, description });
    setIsEditing(false);

  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleCancelEditTask = () => {
    setIsEditing(false);
  };

  return (
    <TaskContainer>
      {isEditing ? (
        <TaskFormContainer onSubmit={handleUpdateTask}>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
          />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button class="Update" type="submit">Update</button>
          <button class="Cancel" onClick={handleCancelEditTask}>Cancel</button>
        </TaskFormContainer>
      ) : (
        <>
          <p class="title">{title}</p>
          <p class="description">{description}</p>
          <button class="edit-buttons" onClick={handleEditTask}>
            <img src="https://cdn.icon-icons.com/icons2/1511/PNG/512/pencileditblackcircularbuttoninterfacesymbol_104762.png" alt="Edit task" />
          </button>
          <button class="delete-buttons" onClick={() => onDeleteTask(swimlaneId, task.id)}>
            <img src="https://cdn-icons-png.flaticon.com/512/84/84462.png" alt="Delete task" />
          </button>
        </>
      )}
    </TaskContainer>

  );
}
export default Task;
