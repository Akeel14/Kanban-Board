import React from "react";
import { NewTaskContainer } from "../Styles/NewTask.Styles";
import NewTaskForm from "../NewTaskForm";

function NewTask({ swimlaneId, onAddTask }) {
  return (
    <NewTaskContainer>
      <NewTaskForm swimlaneId={swimlaneId} onAddTask={onAddTask} />
    </NewTaskContainer>
  );
}

export default NewTask;
