import React, { useState } from "react";
import Swimlane from "./Swimlane";
import {Container, Swimlanes, NewSwimlaneContainer } from "./Styles";
import Sidebar from "./Sidebar";


const defaultSwimlanes = [
  
  {
    id: 1,
    title: "To Do",
    tasks: [],
  },
  {
    id: 2,
    title: "Doing",
    tasks: [],
  },
  {
    id: 3,
    title: "Done",
    tasks: [],
  },
];

function App() {
  const [swimlanes, setSwimlanes] = useState(defaultSwimlanes);

  const [showNewSwimlaneInput, setShowNewSwimlaneInput] = useState(false);

  function addSwimlane(title) {
    setSwimlanes([...swimlanes, { id: Date.now(), title, tasks: [] }]);
  }

  function deleteSwimlane(id) {
    setSwimlanes(swimlanes.filter((swimlane) => swimlane.id !== id));
  }

  function handleNewSwimlaneClick() {
    setShowNewSwimlaneInput(true);
  }

  function handleNewSwimlaneInputKeyPress(event) {
    if (event.key === "Enter") {
      addSwimlane(event.target.value);
      setShowNewSwimlaneInput(false);
      event.target.value = "";
    }
  }

  function updateSwimlaneTitle(id, newTitle) {
    setSwimlanes(
      swimlanes.map((swimlane) =>
        swimlane.id === id ? { ...swimlane, title: newTitle } : swimlane
      )
    );
  }

  return (
    <div className="app">
      <Container>
        <Sidebar />
        <Swimlanes>
          {swimlanes.map((swimlane) => (
            <Swimlane
              key={swimlane.id}
              title={swimlane.title}
              tasks={swimlane.tasks}
              onDelete={() => deleteSwimlane(swimlane.id)}
              onUpdate={(newTitle) => updateSwimlaneTitle(swimlane.id, newTitle)}
            />
          ))}
          {showNewSwimlaneInput ? (
            <NewSwimlaneContainer>
              <input
                type="text"
                placeholder="Enter swimlane title"
                onKeyDown={handleNewSwimlaneInputKeyPress}
              />
            </NewSwimlaneContainer>
          ) : (
            <NewSwimlaneContainer onClick={handleNewSwimlaneClick}>
              Click to add new swimlane
            </NewSwimlaneContainer>
          )}
        </Swimlanes>
      </Container>
    </div>
  );
  
}

export default App;
