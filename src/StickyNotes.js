import React from "react";
import {
  StickyNotes as StickyNotesStyle,
  Filter,
  StickyNotesAndFilter,
} from "./Styles";

function StickyNotes() {
  return (
    <StickyNotesAndFilter>
      <StickyNotesStyle>
        <div className="blank-sticky-note">
          <input type="text" placeholder="Enter task title" />
          {/* <button>Add to swimlane</button> */}
        </div>
      </StickyNotesStyle>
      <Filter>
        <button className="yellow"></button>
        <button className="green"></button>
        <button className="red"></button>
        <button className="purple"></button>
      </Filter>
    </StickyNotesAndFilter>
  );
}

export default StickyNotes;
