import React, { useState } from "react";
import Swimlane from "./Swimlane";
import { Swimlanes, NewSwimlaneContainer } from "./SwimlaneStyles";

const defaultSwimlanes = [
  {
    id: 1,
    title: 'Backlog',
    tasks: [],
  },
  {
    id: 2,
    title: 'To Do',
    tasks: [],
  },
  {
    id: 3,
    title: 'Doing',
    tasks: [],
  },
  {
    id: 4,
    title: 'Done',
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
      <Swimlanes className="swimlanes">
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
    </div>
  );
}

export default App;
