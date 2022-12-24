import React, { useState } from "react";
import {
  StickyNotes as StickyNotesStyle,
  Filter,
  StickyNotesAndFilter,
  AddButton,
} from "./Styles";

function StickyNotes() {
  // Set up state to store the current colour of the sticky note, as well as the title and text
  const [stickyNoteColour, setStickyNoteColour] = useState("yellow");
  const [stickyNoteTitle, setStickyNoteTitle] = useState("");
  const [stickyNoteText, setStickyNoteText] = useState("");

  // Set up state to store whether the dropdown menu is open and the selected swimlane
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSwimlane, setSelectedSwimlane] = useState("");

  const handleColourChange = (event) => {
    const newColour = event.target.className;
    setStickyNoteColour(newColour);
  };

  const handleTitleChange = (event) => {
    setStickyNoteTitle(event.target.innerText);
  };
  const handleTextChange = (event) => {
    setStickyNoteText(event.target.innerText);
  };

  // Handle removing the placeholder text when the user selects the title field
  const handleTitleFocus = (event) => {
    if (stickyNoteTitle === "") {
      event.target.innerText = "";
    }
  };

  // Handle removing the placeholder text when the user selects the text field
  const handleTextFocus = (event) => {
    if (stickyNoteText === "") {
      event.target.innerText = "";
    }
  };

  const handleTitleBlur = (event) => {
    // Check if the element's value is empty
    if (event.target.innerText === "") {
      // Set the element's value to the placeholder text
      event.target.innerText = "Enter title";
    }
  };

  const handleTextBlur = (event) => {
    // Check if the element's value is empty
    if (event.target.innerText === "") {
      // Set the element's value to the placeholder text
      event.target.innerText = "Enter task description ...";
    }
  };



  return (
    <StickyNotesAndFilter>
      <StickyNotesStyle>
        <div className="blank-sticky-note">
          <div className={`sticky-note ${stickyNoteColour}`}>
            {/* Add some spacing between the title and text */}
            <div
              style={{
                //display elements side by side
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  maxLines: "1",
                  overflow: "hidden",
                  maxWidth: "210px",
                  minWidth: "210px",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "50px",
                }}
                contentEditable
                className="sticky-note-title"
                onInput={handleTitleChange}
                onFocus={handleTitleFocus}
                onBlur={handleTitleBlur}
              >
                Enter Title
              </div>
              <AddButton>+</AddButton>

            </div>

            <div
              style={{
                marginLeft: "5px",
                height: "200px",
                maxLines: "9",
                overflow: "hidden",
                fontSize: "18px",
              }}
              contentEditable
              className="sticky-note-text"
              onInput={handleTextChange}
              onFocus={handleTextFocus}
              onBlur={handleTextBlur}
            >
              Enter task description ...
            </div>
          </div>
        </div>
      </StickyNotesStyle>
      <Filter>
        <button className="yellow" onClick={handleColourChange}></button>
        <button className="green" onClick={handleColourChange}></button>
        <button className="red" onClick={handleColourChange}></button>
        <button className="purple" onClick={handleColourChange}></button>
      </Filter>
    </StickyNotesAndFilter>
  );
}

export default StickyNotes;
