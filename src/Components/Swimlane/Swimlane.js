import React, { useState } from "react";
import {
  SwimlaneContainer,
  SwimlaneHeader,
  SwimlaneBody,
  TasksContainer,
} from "./Swimlane.Styles";
import NewTask from "../NewTask/Main/NewTask";
import Task from "../Task/Task";

function Swimlane({
  swimlane,
  onUpdate,
  onDelete,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onMoveTask,
}) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState(swimlane.title);

  const handleUpdateTitle = (event) => {
    event.preventDefault();
    onUpdate(swimlane.id, title);
    setIsEditingTitle(false);
  };

  const handleEditTitle = () => {
    setIsEditingTitle(true);
  };

  const handleCancelEditTitle = () => {
    setIsEditingTitle(false);
    
  };
  return (
    <SwimlaneContainer>
      <SwimlaneHeader>
        {isEditingTitle ? (
          <form onSubmit={handleUpdateTitle}>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              autoFocus
            />
            <button type="submit">Update</button>
            <button onClick={handleCancelEditTitle}>Cancel</button>
          </form>
        ) : (
          <>
            <h3>{title}</h3>
            <button onClick={handleEditTitle}>
              <img src="https://cdn.icon-icons.com/icons2/1511/PNG/512/pencileditblackcircularbuttoninterfacesymbol_104762.png" alt="Edit swimlane" />
            </button>
            <button onClick={() => onDelete(swimlane.id)}>
              <img src="https://cdn-icons-png.flaticon.com/512/84/84462.png" alt="Delete swimlane" />
            </button>
          </>
        )}
      </SwimlaneHeader>
      <SwimlaneBody>
        <NewTask swimlaneId={swimlane.id} onAddTask={onAddTask} />
        <TasksContainer>
          {swimlane.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              swimlaneId={swimlane.id}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
              onMoveTask={onMoveTask}
            />
            
          ))}
        </TasksContainer>
      </SwimlaneBody>
    </SwimlaneContainer>
  );
}
export default Swimlane;
