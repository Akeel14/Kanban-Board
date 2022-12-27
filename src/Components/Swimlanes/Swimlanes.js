import React, { useState } from "react";
import Swimlane from "../Swimlane/Swimlane";
import NewSwimlane from "../NewSwimlane/Main/NewSwimlane";
import { SwimlanesContainer } from "./Swimlanes.Styles";

function Swimlanes() {
  const [swimlanes, setSwimlanes] = useState([
    {
      id: 1,
      title: "To Do",
      tasks: [
        {
          id: 1,
          title: "Project Proposal",
          description:
            "Meet with the client to present the proposal and answer any questions they may have",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      tasks: [
        {
          id: 2,
          title: "Write project proposal",
          description:
            "Draft a detailed proposal for the project, including an overview of the project, a timeline, and a budget",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      tasks: [
        {
          id: 3,
          title: "Create project plan",
          description:
            "Outline the steps and tasks required to complete the project, including deadlines and resources needed",
        },
      ],
    },
  ]);

  const handleAddSwimlane = (title) => {
    const newSwimlane = {
      id: Date.now(),
      title,
      tasks: [],
    };
    setSwimlanes([...swimlanes, newSwimlane]);
  };

  const handleUpdateSwimlane = (id, updatedTitle) => {
    const updatedSwimlanes = swimlanes.map((swimlane) => {
      if (swimlane.id === id) {
        return { ...swimlane, title: updatedTitle };
      }
      return swimlane;
    });
    setSwimlanes(updatedSwimlanes);
  };

  const handleDeleteSwimlane = (id) => {
    const updatedSwimlanes = swimlanes.filter((swimlane) => swimlane.id !== id);
    setSwimlanes(updatedSwimlanes);
  };

  const handleAddTask = (swimlaneId, taskTitle, taskDescription) => {
    const updatedSwimlanes = swimlanes.map((swimlane) => {
      if (swimlane.id === swimlaneId) {
        const newTask = {
          id: Date.now(),
          title: taskTitle,
          description: taskDescription,
        };
        return { ...swimlane, tasks: [...swimlane.tasks, newTask] };
      }
      return swimlane;
    });
    setSwimlanes(updatedSwimlanes);
  };

  const handleUpdateTask = (swimlaneId, taskId, updatedTask) => {
    const updatedSwimlanes = swimlanes.map((swimlane) => {
      if (swimlane.id === swimlaneId) {
        const updatedTasks = swimlane.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, ...updatedTask };
          }
          return task;
        });
        return { ...swimlane, tasks: updatedTasks };
      }
      return swimlane;
    });
    setSwimlanes(updatedSwimlanes);
  };

  const handleDeleteTask = (swimlaneId, taskId) => {
    const updatedSwimlanes = swimlanes.map((swimlane) => {
      if (swimlane.id === swimlaneId) {
        const updatedTasks = swimlane.tasks.filter(
          (task) => task.id !== taskId
        );
        return { ...swimlane, tasks: updatedTasks };
      }
      return swimlane;
    });
    setSwimlanes(updatedSwimlanes);
  };

  const handleMoveTask = (fromSwimlaneId, toSwimlaneId, taskId) => {
    const updatedSwimlanes = swimlanes.map((swimlane) => {
      if (swimlane.id === fromSwimlaneId) {
        const updatedTasks = swimlane.tasks.filter(
          (task) => task.id !== taskId
        );
        return { ...swimlane, tasks: updatedTasks };
      }
      if (swimlane.id === toSwimlaneId) {
        const taskToMove = swimlanes
          .find((s) => s.id === fromSwimlaneId)
          .tasks.find((t) => t.id === taskId);
        return { ...swimlane, tasks: [...swimlane.tasks, taskToMove] };
      }

      return swimlane;
    });
    setSwimlanes(updatedSwimlanes);
  };

  return (
    <SwimlanesContainer>
      {swimlanes.map((swimlane) => (
        <Swimlane
          key={swimlane.id}
          swimlane={swimlane}
          onUpdate={handleUpdateSwimlane}
          onDelete={handleDeleteSwimlane}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
        />
      ))}
      <NewSwimlane onAddSwimlane={handleAddSwimlane} />
    </SwimlanesContainer>
  );
}

export default Swimlanes;
